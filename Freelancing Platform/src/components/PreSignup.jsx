import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const PreSignup = () => {
  const [text, setText] = useState("CREATE ACCOUNT");
  const [role, setRole] = useState("freelancer");

  return (
    <>
      <div className="flex justify-between items-center gap-3 px-16 my-7 ">
        <div>
          <h1>Find the best freelancers</h1>
        </div>
      </div>

      <div className="flex flex-col  gap-10 justify-center items-center h-full w-screen my-48">
        <div>
          <h1 className="text-4xl font-bold text-center uppercase leading-tight max-w-3xl px-4">
            Join as a client or freelancer
          </h1>
        </div>
        <div className="flex gap-12 font-bold text-xl">
          <button
            onClick={() => {
              setRole("freelancer");
              setText("Sign up as a freelancer");
            }}
            className={`border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl hover:object-scale-down hover:scale-110
            ${role == "freelancer" ? "border-green-500" : "border-black"}`}
          >
            <img
              className="object-contain transform"
              width="80"
              height="80"
              src="https://img.icons8.com/dotty/80/men-age-group-5.png"
              alt="freelancer"
            />
            <p>I’m a freelancer, looking for work</p>
          </button>
          <button
            onClick={() => {
              setRole("client");
              setText("Join as a client");
            }}
            className={`border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl hover:scale-110
            ${role == "client" ? "border-green-600" : "border-black"}`}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/manager.png"
              alt="manager"
            />
            <p>I’m a client, hiring for a project</p>
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
        {
          role == "freelancer" ?
          <Link to="/freelancer-signup">
            <button className="bg-green-700 text-white text-bold px-5 py-5 m-5 rounded-2xl">
              {text}
            </button>
          </Link>:
          <Link to="/client-signup">
            <button className="bg-green-700 text-white text-bold px-5 py-5 m-5 rounded-2xl">
              {text}
            </button>
          </Link>
        }

          <div>
            <span>Already have an account? </span>
            <Link to="/login">
              <p className="text-blue-500 underline ">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSignup;
