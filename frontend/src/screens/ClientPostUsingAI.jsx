import { useEffect } from "react";
import { Link } from "react-router-dom";
import images from '../assets'
const { bg : backgroundImage } = images
import "../index.css";

const ClientPostUsingAI = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen w-full justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex flex-col w-full max-w-5xl gap-6 lg:gap-10 mb-8">
          <h1 className="font-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight mb-4">
            Describe what you are looking for in a sentence or two.
          </h1>
          <input
            type="text"
            className="border-black border-2 sm:border-3 rounded-3xl w-full py-3 sm:py-5 px-4 sm:px-8 md:px-10 relative text-lg"
            placeholder="Eg. I need someone to help me build a Shopify website for my office furniture business."
          />
          <p className="opacity-50 text-sm sm:text-base text-right">
            150 characters left
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between  gap-4 w-full max-w-2xl">
          <Link to="/client-homepage" className="flex-1 sm:flex-none">
            <button className="w-full sm:w-auto bg-slate-200 text-green-500 font-semibold text-lg sm:text-xl border-2 border-gray-400 rounded-xl px-4 sm:px-6 py-2 sm:py-3">
              Back
            </button>
          </Link>
          <Link to="/next-page" className="flex-1 sm:flex-none">
            <button className="w-full sm:w-auto bg-slate-200 text-black font-semibold text-lg sm:text-xl border-2 border-gray-400 rounded-xl px-4 sm:px-6 py-2 sm:py-3">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientPostUsingAI;
