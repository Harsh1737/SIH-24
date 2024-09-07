import { useState } from "react";
import img from "../assets/rating.png";
import '../index.css'

function FreelancerInfo() {
  const [isLogin, setIsLogin] = useState(true); // true for Previous Works, false for Gig Works

  const toggleView = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex mt-3 bg-white rounded-md shadow">
      <div className="w-1/3 p-6 border-r border-gray-200">
        <img
          src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
          alt="Profile"
          className="mt-8 w-[300px] h-[300px] mx-auto"
        />
        <hr className="mt-12" />
        <div className="mt-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-600 inline-block mb-2">
            Contact Information
          </h3>
          <p className="text-gray-500">Phone: +1 123 456 7890</p>
          <p className="text-gray-500">
            Address: 525 E 68th Street, New York, NY
          </p>
          <p className="text-gray-500">Email: hello@jeremyrose.com</p>
          <p className="text-gray-500">Site: www.jeremyrose.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-600 inline-block mb-2">
            Basic Information
          </h3>
          <p className="text-gray-500">Birthday: June 5, 1992</p>
          <p className="text-gray-500">Gender: Male</p>
        </div>
      </div>
      <div className="w-2/3 p-6">
        <div className="mt-4 mb-6">
          <div className="flex">
            <h2 className="text-3xl font-bold">Jeremy Rose</h2>
            <div className="flex mx-16">
              <img
                className="h-6 w-6 mt-2"
                src="https://www.svgrepo.com/show/433956/location.svg"
                alt=""
              />
              <p className="text-gray-500 mt-2">New York, NY</p>
            </div>
          </div>
          <h5 className="text-lg text-gray-500">Product Designer</h5>
          <div className="flex gap-1">
            <img className="h-10 w-30" src={img} alt="" />
          </div>
          <p>
            I am a results-driven freelance product designer with a proven track
            record of delivering innovative, user-centric designs that drive
            engagement and meet business goals. Skilled in UX/UI design,
            wireframing, and prototyping, I offer tailored solutions that
            enhance user experiences and align with your brand vision. Let’s
            collaborate to turn your ideas into impactful, visually stunning
            products.
          </p>
        </div>
        <hr className="mt-6 mb-4" />

        <div className="mb-6">
          <div className="relative">
            <div className="flex mb-4 justify-start ">
              <button
                onClick={toggleView}
                className={`py-2 ml-2 text-black  rounded-l-md font-bold font-serif`}
              >
                Previous Works
              </button>
              <button
                onClick={toggleView}
                className={`py-2 px-4 ml-8 text-black rounded-r-md font-bold font-serif`}
              >
                Gig Works
              </button>
            </div>
            <div className="relative">
              <div
                className={`absolute top-0 left-0 h-1 bg-blue-500 transition-transform duration-300 ease-in-out ${
                  isLogin ? "w-1/5" : "w-1/5 translate-x-full"
                }`}
                style={{ height: "2px" }}
              />
              <div className="pt-6">
                {isLogin ? (
                  <div>
                    <p className="text-gray-500">
                      Previous Work 1: Spotify New York - Primary
                    </p>
                    <p className="text-gray-500">
                      Previous Work 2: Metropolitan Museum - Secondary
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-500">
                      Gig Work 1: Freelance Project A
                    </p>
                    <p className="text-gray-500">
                      Gig Work 2: Freelance Project B
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerInfo;
