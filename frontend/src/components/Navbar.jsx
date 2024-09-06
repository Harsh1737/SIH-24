import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <>
      <div className="flex justify-between align-middle mx-0 my-auto w-[90%]">
        <a href="/">
          <img src="images/logo-l5.svg" alt="Logo" />
        </a>

        <nav className="flex flex-wrap justify-around">
          <ul className="list-none p-0 m-0 flex gap-12">
            <li className="px-0">
              <a href="#" className="no-underline inline-block py-6">
                Jobs
              </a>
            </li>

            <div className="w-[1px] h-16 bg-gray-100 "></div>

            <li className="has-submenu relative flex gap-2 items-center justify-start pt-0 pb-6">
              <a href="#" className="no-underline inline-block py-6 ">
                Services
              </a>
              <ul className="absolute top-full left-0 bg-custom-gradient rounded-md p-2 hidden hover:text-white">
                <li>
                  <a href="#" className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black ">
                    Logo Design
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black">
                    Content Creator
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black">
                    Video and Animation
                  </a>
                </li>
              </ul>
            </li>
            <div className="w-[1px] h-16 bg-gray-100  "></div>
            <li>
              <a href="#" className="no-underline inline-block py-6">
                What's New
              </a>
            </li>
            <div className="w-[1px] h-16 bg-gray-100 "></div>
            <li>
              <a href="#" className="no-underline inline-block py-6">
                About
              </a>
            </li>

            <Link to="/login">
              <button className="h-10 w-24 mt-5 px-6 py-0 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                Login
              </button>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="w-full h-[1px] bg-gray-100 "></div>
    </>
  );
}

export default Navbar;
