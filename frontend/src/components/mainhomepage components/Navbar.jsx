import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mx-auto w-full py-4 px-4 md:w-[90%]">
        {/* Hamburger Icon - small screen*/}
        <button className="text-gray-500 block md:hidden" onClick={toggleMenu}>
          <img
            className="h-8 w-8"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+"
            alt="Open Menu"
          />
        </button>

        {/* Logo */}
        {/* --------------------------------------------------- */}
        <Link to="/" className="md:mx-auto">
          <img src="../../assets/image2.png" alt="X" className="h-8 md:h-12" />
        </Link>

        <Link to="/login" className="md:hidden block">
          <button className="h-10 w-24 px-6 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            Login
          </button>
        </Link>

        {/* Full-Screen Overlay Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col md:flex-row items-center justify-between gap-10 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:relative md:bg-transparent`}
        >
          {/* Close Button (Visible in Overlay Mode) */}
          <button
            className="absolute top-4 left-4 text-gray-500 md:hidden"
            onClick={toggleMenu}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+"
              alt="Close Menu"
              className="h-8 w-8"
            />
          </button>
          <div></div>
          <div className=" md:block hidden "></div>

            {/* Navbar Content (Logo, Links, Post Button) */}
            <nav className="flex flex-col md:flex-row items-center md:gap-12 gap-8">
              <a href="/" className="md:hidden block">
                <img src="images/logo-l5.svg" alt="Logo" className="h-12" />
              </a>

              <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <li className="px-0">
                  <a
                    href="#"
                    className="no-underline block py-2 md:py-6 text-lg"
                  >
                    Jobs
                  </a>
                </li>

                <li className="relative group">
                  <a
                    href="#"
                    className="no-underline block py-2 md:py-6 text-lg"
                  >
                    Services
                  </a>
                  <ul className="absolute top-full left-0 bg-custom-gradient rounded-md p-2 hidden group-hover:block md:group-hover:block">
                    <li>
                      <a
                        href="#"
                        className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black"
                      >
                        Logo Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black"
                      >
                        Photography
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black"
                      >
                        Content Creator
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="no-underline py-6 flex justify-between items-center p-4 min-w-[15rem] rounded-md text-black"
                      >
                        Video and Animation
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#"
                    className="no-underline block py-2 md:py-6 text-lg"
                  >
                    What's New
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="no-underline block py-2 md:py-6 text-lg"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
            {/* Post Button */}
            <Link to="/login" className="block">
              <button className="h-10 w-24 px-6 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                Login
              </button>
            </Link>
            <div className="block md:hidden"></div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-100 md:block hidden shadow-xl"></div>
    </>
  );
}

export default Navbar;
