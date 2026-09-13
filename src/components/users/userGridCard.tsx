import { useState, type MouseEvent } from "react";
import { FaCopy, FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router";

type UserGridCardProps = {
  name: string;
  email: string;
  phone: string;
  id: number;
};

const UserGridCard = ({ name, email, phone, id }: UserGridCardProps) => {
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
      className="group relative flex h-[250px] w-full max-w-[300px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#3b6dae]/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3b6dae]/40 hover:shadow-lg"
    >
      <div className="relative h-24 shrink-0 overflow-hidden bg-gradient-to-br from-[#1a3f6b] via-[#3b6dae] to-[#152d4d]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-6 -bottom-8 h-24 w-24 rounded-full bg-red-500/25 blur-2xl" />

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Link copied" : "Copy profile link"}
          title={copied ? "Copied!" : "Copy profile link"}
          className="absolute top-3 right-3 z-10 cursor-pointer rounded-lg bg-white/15 p-2 text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          {copied ? <FaCheck className="text-green-300" /> : <FaCopy />}
        </button>
      </div>

      <div className="relative flex flex-1 flex-col px-4 pt-0 pb-4">
        <div className="-mt-8 mb-3 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#3b6dae] to-[#1a3f6b] text-lg font-bold text-white shadow-md transition group-hover:scale-105">
            {initials || "?"}
          </div>
        </div>

        <h3 className="truncate text-center text-base font-semibold text-[#1a3f6b] group-hover:text-[#3b6dae]">
          {name}
        </h3>

        <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
          <span className="flex items-center gap-2 truncate">
            <FaEnvelope className="shrink-0 text-[#3b6dae]/70" />
            <span className="truncate">{email}</span>
          </span>
          <span className="flex items-center gap-2 truncate">
            <FaPhone className="shrink-0 text-[#3b6dae]/70" />
            <span className="truncate">{phone}</span>
          </span>
        </div>

        <div className="mt-auto pt-3">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#3b6dae] to-red-500 transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default UserGridCard;
