import { useEffect, useState, type CSSProperties } from "react";
import { FaSearch, FaThLarge, FaList } from "react-icons/fa";
import Header from "../components/Header";
import UserListCard from "../components/users/userListCard";
import UserGridCard from "../components/users/userGridCard";
import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "../api/users";
import Loading from "../components/Loading";
import Error from "../components/Error";

type SortOrder = "az" | "za";
type ViewMode = "list" | "grid";

type UsersPageState = {
  query: string;
  sortOrder: SortOrder;
  viewMode: ViewMode;
};

const STORAGE_KEY = "centrica.usersPage";
const SEARCH_ANIM_DEBOUNCE_MS = 180;

const defaults: UsersPageState = {
  query: "",
  sortOrder: "az",
  viewMode: "list",
};

const loadState = (): UsersPageState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<UsersPageState>;
    return {
      query: typeof parsed.query === "string" ? parsed.query : defaults.query,
      sortOrder:
        parsed.sortOrder === "az" || parsed.sortOrder === "za"
          ? parsed.sortOrder
          : defaults.sortOrder,
      viewMode:
        parsed.viewMode === "list" || parsed.viewMode === "grid"
          ? parsed.viewMode
          : defaults.viewMode,
    };
  } catch {
    return defaults;
  }
};

const UsersPage = () => {
  const [{ query, sortOrder, viewMode }, setState] = useState(loadState);
  const [animQuery, setAnimQuery] = useState(() => query.trim().toLowerCase());

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const setQuery = (value: string) =>
    setState((prev) => ({ ...prev, query: value }));
  const setSortOrder = (value: SortOrder) =>
    setState((prev) => ({ ...prev, sortOrder: value }));
  const setViewMode = (value: ViewMode) =>
    setState((prev) => ({ ...prev, viewMode: value }));

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ query, sortOrder, viewMode } satisfies UsersPageState),
    );
  }, [query, sortOrder, viewMode]);

  const normalizedQuery = query.trim().toLowerCase();

  // Debounce search remounts so typing doesn't restart the animation every keystroke.
  useEffect(() => {
    const id = window.setTimeout(() => {
      setAnimQuery(normalizedQuery);
    }, SEARCH_ANIM_DEBOUNCE_MS);
    return () => window.clearTimeout(id);
  }, [normalizedQuery]);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const visibleUsers = users
    .filter((user) => {
      if (!normalizedQuery) return true;
      return (
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery)
      );
    })
    .sort((a, b) => {
      const cmp = a.name.localeCompare(b.name, undefined, {
        sensitivity: "base",
      });
      return sortOrder === "az" ? cmp : -cmp;
    });

  const resultsAnimKey = `${viewMode}|${sortOrder}|${animQuery}`;

  return (
    <div className="flex flex-col gap-6">
      <Header
        title="Users"
        subtitle="Browse and explore everyone in the Centrica directory."
        to="/"
        toTitle="Home"
      />
      {/* Filter */}
      <div className="p-6  md:p-10">
        <div className="flex flex-col mb-20 gap-4 rounded-xl border border-[#3b6dae]/15 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <label className="relative flex min-w-0 flex-1 items-center">
            <FaSearch className="pointer-events-none absolute left-3 text-zinc-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by name or email..."
              className="w-1/2 rounded-lg border border-zinc-200 bg-zinc-50 py-2.5 pr-3 pl-10 text-sm text-zinc-800 outline-none transition focus:border-[#3b6dae] focus:bg-white focus:ring-2 focus:ring-[#3b6dae]/20"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <label className="flex items-center gap-2 text-sm text-zinc-600">
              <span className="whitespace-nowrap font-medium">Sort</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="cursor-pointer rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#3b6dae] focus:ring-2 focus:ring-[#3b6dae]/20"
              >
                <option value="az">A → Z</option>
                <option value="za">Z → A</option>
              </select>
            </label>

            <div
              className="flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-1"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-pressed={viewMode === "list"}
                className={`flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-[#3b6dae] text-white shadow-sm"
                    : "text-zinc-600 hover:bg-white hover:text-[#3b6dae]"
                }`}
              >
                <FaList />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                className={`flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                  viewMode === "grid"
                    ? "bg-[#3b6dae] text-white shadow-sm"
                    : "text-zinc-600 hover:bg-white hover:text-[#3b6dae]"
                }`}
              >
                <FaThLarge />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* User Data lists */}
        {visibleUsers.length === 0 ? (
          <p className="motion-preset-fade-sm py-12 text-center text-sm text-red-400">
            No user found matching &quot;{query}&quot;.
          </p>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "flex flex-col"
            }
          >
            {visibleUsers.map((user, index) => (
              <div
                key={`${resultsAnimKey}-${user.id}`}
                className="motion-preset-slide-up-sm"
                style={
                  {
                    "--motion-delay": `${Math.min(index, 12) * 35}ms`,
                  } as CSSProperties
                }
              >
                {viewMode === "list" ? (
                  <UserListCard {...user} />
                ) : (
                  <UserGridCard {...user} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
