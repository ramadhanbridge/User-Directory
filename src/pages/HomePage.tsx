import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate()
 
  return (
    <div className="relative w-full h-screen bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0, 0, 0, 0.55)_70%,rgba(0,0,0,0.85)_100%)]" />
      <div className="relative z-10 flex flex-row h-full w-full pt-25">
        <div className="flex-1 flex flex-col p-10 gap-4">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500">
            USER DIRECTORY
          </h1>
          <p className="text-xl text-white mt-4 mb-10 font-serif">
            Welcome to <span className="text-red-500 text-3xl">Centrica</span>{" "}
            user directory, your go-to platform for managing and exploring user
            information.
          </p>
          <button className="bg-red-500 text-white cursor-pointer px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-red-600 transition-all duration-300 md:w-1/2" onClick={()=>navigate("/users")}>
            <span className="font-semibold">Explore Users </span>
            <span className="text-white animate-[nudge_1s_ease-in-out_infinite]">
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
