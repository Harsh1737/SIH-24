import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const PreSignup = () => {
  const [text, setText] = useState("CREATE ACCOUNT");
  const [role, setRole] = useState("");

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-4 sm:px-16 my-7">
        <Link to="/">
          <img src="../assets/image2.png" alt="X" className="h-8 md:h-12" />
        </Link>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center h-full w-full my-12 px-4 sm:px-16">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center uppercase leading-tight max-w-3xl">
            Join as a client or freelancer
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-bold text-lg sm:text-xl">
          <button
            onClick={() => {
              setRole("freelancer");
              setText("Sign up as a freelancer");
            }}
            className={`border-2 sm:border-3 shadow-lg p-4 sm:p-6 h-auto w-full sm:w-[300px] rounded-xl transition-transform duration-300 ease-in-out
            ${
              role === "freelancer" ? "border-green-500" : "border-black"
            } hover:scale-105`}
          >
            <img
              className="object-contain mx-auto"
              width="80"
              height="80"
              src="https://img.icons8.com/dotty/80/men-age-group-5.png"
              alt="freelancer"
            />
            <p className="text-center">I’m a freelancer, looking for work</p>
          </button>
          <button
            onClick={() => {
              setRole("client");
              setText("Join as a client");
            }}
            className={`border-2 sm:border-3 shadow-lg p-4 sm:p-6 h-auto w-full sm:w-[300px] rounded-xl transition-transform duration-300 ease-in-out
            ${
              role === "client" ? "border-green-600" : "border-black"
            } hover:scale-105`}
          >
            <img
              className="object-contain mx-auto"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/manager.png"
              alt="manager"
            />
            <p className="text-center">I’m a client, hiring for a project</p>
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          {role === "freelancer" ? (
            <Link to="/freelancer-signup">
              <button className="bg-green-700 text-white font-bold px-4 sm:px-5 py-3 sm:py-5 m-3 sm:m-5 rounded-2xl">
                {text}
              </button>
            </Link>
          ) : (
            <Link to="/client-signup">
              <button className="bg-green-700 text-white font-bold px-4 sm:px-5 py-3 sm:py-5 m-3 sm:m-5 rounded-2xl">
                {text}
              </button>
            </Link>
          )}

          <div className="flex flex-col gap-1 justify-center items-center">
            <div>Already have an account? </div>
            <Link to="/login">
              <p className="text-blue-500 underline">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSignup;
