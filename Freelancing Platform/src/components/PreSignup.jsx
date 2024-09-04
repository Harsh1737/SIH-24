import { useState } from "react";
import '../index.css'
const PreSignup = () => {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("CREATE ACCOUNT");

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
              setColor("blue");
              setText("Sign up as a freelancer");
            }}
            className={`border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl hover:object-scale-down hover:scale-110
            ${color == "blue" ? "border-green-500" : "border-black"}`}
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
              setColor("red");
              setText("Join as a client");
            }}
            className={`border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl hover:scale-110
            ${color == "red" ? "border-green-600" : "border-black"}`}
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
          <button className="bg-green-700 text-white text-bold px-5 py-5 m-5 rounded-2xl">
            {text}
          </button>

          <div>
            <span>Already have an account? </span>
            <span>
              <a className="text-blue-500 underline hover: scale-150" src="" href="#">Log in</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSignup;
