import { useState, type MouseEvent } from "react";
import { FaCopy, FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router";

type UserListCardProps = {
  name: string;
  email: string;
  phone: string;
  id: number;
};

const UserListCard = ({ name, email, phone, id }: UserListCardProps) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const handleCopy = async (e: MouseEvent) => {
    e.stopPropagation();
    const fullUrl = `${window.location.origin}/users/${id}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/users/${id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(`/users/${id}`);
        }
      }}
      className="group flex cursor-pointer mb-5 items-center justify-between gap-4 rounded-xl border border-[#3b6dae]/15 bg-white px-4 py-3 shadow-sm transition hover:border-[#3b6dae]/40 hover:bg-[#eef4fb]/60 hover:shadow-md"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3b6dae] to-[#1a3f6b] text-sm font-bold text-white"
        >
          {initials || "?"}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-[#1a3f6b] group-hover:text-[#3b6dae]">
            {name}
          </h3>
          <div className="mt-1 flex flex-col gap-1 text-sm text-zinc-600 sm:flex-row sm:gap-4">
            <span className="flex min-w-0 items-center gap-1.5 truncate">
              <FaEnvelope className="shrink-0 text-zinc-400" />
              {email}
            </span>
            <span className="flex min-w-0 items-center gap-1.5 truncate">
              <FaPhone className="shrink-0 text-zinc-400" />
              {phone}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copied" : "Copy profile link"}
        title={copied ? "Copied!" : "Copy profile link"}
        className="shrink-0 cursor-pointer rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 text-zinc-600 transition hover:border-[#3b6dae]/30 hover:bg-white hover:text-[#3b6dae]"
      >
        {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
      </button>
    </article>
  );
};

export default UserListCard;
