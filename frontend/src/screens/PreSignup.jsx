import { useState } from "react";
import { Link } from "react-router-dom";
import components from "../components";
const { Button, PreSignUpButton } = components;

const PreSignup = () => {
  const [btnText, setBtnText] = useState("CREATE ACCOUNT");
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
        <PreSignUpButton
        role="freelancer"
        setRole={setRole}
        setBtnText={setBtnText}
        imageSrc="https://img.icons8.com/dotty/80/men-age-group-5.png"
        altText="freelancer"
        buttonText="Sign up as freelancer"
        currentRole={role}
        borderColor="border-green-500"
      />
      <PreSignUpButton 
        role="client"
        setRole={setRole}
        setBtnText={setBtnText}
        imageSrc="https://img.icons8.com/ios/50/manager.png"
        altText="manager"
        buttonText="Join as a client"
        currentRole={role}
        borderColor="border-green-600"
      />
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          {(role === "freelancer") ? (
            <Button
              to="/freelancer-signup"
              className="bg-green-700 hover:bg-green-600 text-white font-bold px-4 sm:px-5 py-3 sm:py-5 m-3 sm:m-5 rounded-xl"
            >
              {btnText}
            </Button>
          ) : (role === "client") ? (
            <Button
              to="/client-signup"
              className="bg-green-700 hover:bg-green-600 text-white font-bold px-4 sm:px-5 py-3 sm:py-5 m-3 sm:m-5 rounded-xl"
            >
              {btnText}
            </Button>
          ) : (
            <button className="bg-gray-300 text-gray-500 border border-gray-500 font-bold px-4 sm:px-5 py-3 sm:py-5 m-3 sm:m-5 rounded-xl">
              CHOOSE ONE
            </button>
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
