import images from '../assets'
const { bg : backgroundImage } = images
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const ClientHome = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 shadow-md">
          <Link to="/" className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <img src="" alt="CX" className="w-24 sm:w-32" /> {/* Add your logo image here */}
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 w-full sm:w-auto">
            <Link to="/post" className="flex-shrink-0">
              <button className="w-full sm:w-auto bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg text-sm sm:text-base">
                Post
              </button>
            </Link>
            <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
              <svg
                src="https://img.icons8.com/bubbles/100/000000/user.png"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </div>
          </div>
        </header>
        
        <main className="px-4 sm:px-20 h-[80%] py-8 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-black tracking-tighter leading-tight mb-4 font-serif  mt-4 md:mt-8 text-shadow-lg">
              Post your job here
            </h1>
            <p className="text-2xl mt-8 text-gray-700 sm:text-4xl md:text-5xl mb-6">
              Forget the old rules. You can have the best people. Right now. Right here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-16">
              <Link to="/create-postusingai">
                <button className="w-full sm:w-auto bg-blue-400 text-white py-3 px-6 rounded-xl">
                  Get Started Using AI
                </button>
              </Link>
              <Link to="/create-post">
                <button className="w-full sm:w-auto text-blue-600 py-3 px-6 rounded-xl border border-blue-600">
                  I'll do it manually
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-auto object-cover rounded-lg "
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
              alt="home page img"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default ClientHome;
