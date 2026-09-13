import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(105deg,rgba(15,28,48,0.92)_0%,rgba(15,28,48,0.72)_42%,rgba(59,109,174,0.25)_70%,transparent_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_80%_50%,transparent_20%,rgba(8,16,32,0.55)_75%,rgba(8,16,32,0.8)_100%)]" />

      <div className="relative z-10 flex flex-row h-full w-full pt-25">
        <div className="flex-1 flex flex-col justify-center p-10 gap-5 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">
            <span className="block text-[#3b6dae] drop-shadow-[0_0_28px_rgba(59,109,174,0.45)]">
              Centrica
            </span>
            <span className="mt-2 block text-3xl md:text-5xl font-semibold text-white/95">
              User Directory
            </span>
          </h1>

          <div className="h-1 w-16 rounded-full bg-linear-to-r from-[#3b6dae] to-[#7eb0e8]" />

          <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
            Your go-to platform for managing and exploring user information
            across the organisation.
          </p>

          <button
            className="mt-4 group bg-[#3b6dae] text-white cursor-pointer px-6 py-3 flex gap-3 justify-center items-center rounded-md shadow-[0_8px_24px_rgba(59,109,174,0.35)] hover:bg-[#2f5a94] hover:shadow-[0_10px_32px_rgba(59,109,174,0.5)] hover:translate-x-0.5 transition-all duration-300 md:w-fit"
            onClick={() => navigate("/users")}
          >
            <span className="font-semibold tracking-wide">Explore Users</span>
            <span className="text-white/90 group-hover:text-white animate-[nudge_1s_ease-in-out_infinite]">
              <FaAngleRight />
            </span>
          </button>
        </div>
        <div className="hidden md:block md:flex-1" />
      </div>
    </div>
  );
};
export default HomePage;
