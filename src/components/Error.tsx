import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

type ErrorProps = {
  message?: string;
};

const Error = ({ message = "Something went wrong." }: ErrorProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 px-4 text-center"
      role="alert"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <FaExclamationTriangle className="text-2xl" />
      </div>
      <div className="flex max-w-md flex-col gap-1">
        <h2 className="text-lg font-semibold text-zinc-800">Error</h2>
        <p className="text-sm text-zinc-500">{message}</p>
      </div>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#3b6dae] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#345f98]"
      >
        <FaHome />
        Go back home
      </button>
    </div>
  );
};

export default Error;
