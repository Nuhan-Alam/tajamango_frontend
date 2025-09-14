import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { SlLogout } from "react-icons/sl";
import { FaHistory } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = ({ currentOrders }) => {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const orderNum = currentOrders?.length;
  console.log("This is from sidebar", orderNum);

  const customerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Profile" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FaDropbox, label: "Current Orders" },
    { to: "/dashboard/history", icon: FaHistory, label: "History" },
    // { to: "/reviews", icon: FiStar, label: "Reviews" },
  ];

  const adminMenues = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    // { to: "/categories", icon: FiTag, label: "Categories" },
    // { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
    // { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Processing Orders" },
    { to: "/dashboard/history", icon: FaHistory, label: "History" },
    // { to: "/reviews", icon: FiStar, label: "Reviews" },
    // { to: "/users", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? adminMenues : customerMenus;

  return (
    <div className="drawer-side mt-18 md:mt-0 z-10">
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar menu */}
        <ul className="menu menu-md gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="flex items-center">
                <div className="indicator cursor-pointer">
                  <item.icon className="h-4 w-4" />
                  {item.label==="Current Orders" && orderNum>0 && <p className=" rounded-md px-1 indicator-item bg-red-300 text-white lg:text-sm">
                    {orderNum}
                  </p>}
                  
                </div>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <button
            onClick={() => {
              logoutUser(navigate);
            }}
            className="pl-2.5 gap-2 flex items-center hover:bg-red-300 rounded-lg p-2 cursor-pointer transition-colors"
          >
            <SlLogout className="h-4 w-4 text-black" />
            Logout
          </button>
        </ul>

        {/* Sidebar footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 TajaMango.com
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
