import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="hero">
      <header id="main-header">
        <a href="/">
          <img src="images/logo-l5.svg" alt="Logo" />
        </a>

        <nav className="flex flex-wrap justify-around">
          <ul>
            <li className="px-0">
              <a href="#">Jobs</a>
            </li>
            <div className="w-[1px] h-16 bg-gray-100 "></div>

            <li className="has-submenu">
              <a href="#">Services</a>
              <ul>
                <li>
                  <a href="#">Logo Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Content Creator</a>
                </li>
                <li>
                  <a href="#">Video and Animation</a>
                </li>
              </ul>
            </li>
            <div className="w-[1px] h-16 bg-gray-100  "></div>
            <li>
              <a href="#">What's New</a>
            </li>
            <div className="w-[1px] h-16 bg-gray-100 "></div>
            <li>
              <a href="#">About</a>
            </li>

            <Link to="/emp-login" >
              <button className=" mt-4 h-10 w-24 px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                Login
              </button>
            </Link>
          </ul>
        </nav>
      </header>
      <div className="w-full h-[1px] bg-gray-100 "></div>
    </div>
  );
}

export default Navbar;
