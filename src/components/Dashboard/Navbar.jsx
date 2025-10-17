import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = ({ sidebarOpen }) => {
  return (
    <div className="navbar lg:hidden">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          {sidebarOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </label>
      </div>
    </div>
  );
};

export default Navbar;