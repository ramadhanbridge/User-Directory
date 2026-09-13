import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

type HeaderProps = {
  title: string;
  subtitle?: string;
  to: string;
};

const Header = ({ title, subtitle, to }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-start gap-4 border-b border-zinc-200 pb-4">
      <button
        type="button"
        onClick={() => navigate(to)}
        className="mt-1 cursor-pointer rounded-md p-2 text-red-500 transition-colors hover:bg-red-50"
        aria-label="Go back"
      >
        <FaAngleLeft className="text-xl" />
      </button>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-red-500 md:text-3xl">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-zinc-600 md:text-base">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
