import { useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/bg.svg";
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

  // const [noOfChars, setNoOfChars] = useState(150);
  return (
    <>
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <div className="h-screen flex flex-col flex-wrap gap-10 justify-center items-center w-2/3">
          <div className="flex flex-col flex-wrap gap-10">
            <div>
              <h1 className="font-semibold tracking-wide text-wrap text-6xl text-center leading-tight mb-2">
                Describe what you are looking for in a sentence or two.
              </h1>
            </div>
            <input
              type="text"
              className="border-black border-4 rounded-3xl w-full py-5 px-10 relative"
              placeholder="Eg. I need someone to help me build a Shopify website for my office furniture business. "
            />
            <p className="opacity-50  flex justify-end">150 characters left</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-5 px-16 w-full">
          <Link to="/emp-login">
            <button className="text-green-500 bg-slate-200 font-semibold text-2xl border-2 border-gray-400 bg-transparent rounded-xl px-9 py-3">
              Back
            </button>
          </Link>
          <button className="text-black bg-slate-200 font-semibold text-2xl border-2 border-gray-400 bg-transparent rounded-xl px-9 py-3">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientPostUsingAI;
