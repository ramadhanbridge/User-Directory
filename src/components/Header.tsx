import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

type HeaderProps = {
  title: string;
  subtitle?: string;
  to: string;
  toTitle?: string;
};

const Header = ({ title, subtitle, to, toTitle }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative overflow-hidden border-b border-[#3b6dae]/15 bg-gradient-to-br from-[#eef4fb] via-white to-[#f8fafc] p-5 md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#3b6dae]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3b6dae]/30 to-transparent" />

      <div className="relative">
        <div
          onClick={() => navigate(to)}
          className="mb-8 flex cursor-pointer items-center gap-2 text-red-500 transition-opacity hover:opacity-80"
        >
          <button
            type="button"
            className="rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-[#3b6dae]/10 transition-colors hover:bg-red-50"
            aria-label="Go back"
          >
            <FaAngleLeft className="text-xl" />
          </button>
          {toTitle ? <h2 className="font-medium">{toTitle}</h2> : null}
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-red-500 md:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-sm text-zinc-600 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
