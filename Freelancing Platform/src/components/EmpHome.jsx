
import backgroundImage from '../assets/bg.svg';
import { useEffect } from "react";

const EmpHome = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.backgroundImage = `url(${backgroundImage})`;
        return () => {
          document.body.style.backgroundColor = '';
          document.body.style.backgroundImage = '';
        };
      }, []);
  return (
    <>
    <div className="">
      <div className="flex justify-between items-center  px-20 my-10 ">
        <div>
          <h1>Find the best freelancers</h1>
        </div>
        <div className="flex gap-20 ">
          <div className='border '>
            <button className="bg-blue-800  px-5 py-3 text-white border-b-blue-950 rounded-xl">
              Post
            </button>
          </div>
          <div>
            <svg
              src="https://img.icons8.com/bubbles/100/000000/user.png"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-48 px-20 h-28 w-screen flex gap-x-56">
        <div className="w-[40vw]">
          <h1 className="font-serif text-black text-9xl tracking-tighter text-left leading-1 font-bold text-wrap ">
            Post your job here
          </h1>
          <p className="my-7 text-black text-5xl text-wrap ">
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </p>
          <div className="flex justify-center">
            <button className="w-60 bg-blue-400 text-white my-10 py-4 px-5 mx-8 rounded-xl translate-x-[-100px]">
              Get Started Using AI
            </button>
            <button className="text-blue-600 my-10 py-4 px-5 rounded-xl translate-x-[-100px]">
              I'll do it manually
            </button>
          </div>
        </div>
        <div className="w-[600px]  h-[500px]">
          <img
            className=" h-full w-screen relative "
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt="home page img"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default EmpHome;
