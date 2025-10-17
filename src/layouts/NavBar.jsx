import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import UserBar from "../components/NavBar/UserBar";
import LoginBar from "../components/NavBar/LoginBar";
import LoginBarSm from "../components/NavBar/LoginBarSm";
import UserBarSm from "../components/NavBar/UserBarSm";


const NavBar = ({localCart,setLocalCart}) => {
  const { user } = useAuthContext();

  return (
    <div className="navbar px-4 absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* Logo */}
      <div className="navbar-start ">
        <a className="montserrat-400 pb-3 text-white text-xl lg:ml-20 lg:text-2xl">
          TajaMango.com
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex items-center mr-20 ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-white hover:text-[#8FA31E] lg:text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-white hover:text-[#8FA31E] lg:text-lg"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-[#8FA31E] lg:text-lg"
            >
              About
            </Link>
          </li>
          {user === null ? (
            <LoginBar />
          ) :
            <UserBar localCart={localCart} setLocalCart={setLocalCart} />
          }
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6H6m12 4H6m12 4H6m12 4H6"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-[#EFF5D2] rounded-box w-30"
          >
            <li>
              <Link
                to="/"
                className="hover:text-[#8FA31E] flex items-center justify-center"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-[#8FA31E] flex items-center justify-center"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#8FA31E] flex items-center justify-center"
              >
                About
              </Link>
            </li>
            {user === null ? (
              <LoginBarSm />
            ) :(
              <UserBarSm localCart={localCart} setLocalCart={setLocalCart}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
