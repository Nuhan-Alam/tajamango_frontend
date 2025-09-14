import { Link } from "react-router-dom";

const UserBar = ({ localCart}) => {


  const itemsLength = localCart?.items?.length || 0;
  return (
    <ul className="flex items-center justify-center gap-2">
      <li>
        <Link
          to="/dashboard"
          className="text-white hover:text-[#8FA31E] lg:text-lg pb-2.5 "
        >
          Dashboard
        </Link>
      </li>
      <li>
        {itemsLength > 0 && (
           <Link
          to="/dashboard/cart"
          className="hover:bg-[#556B2F] p-1 rounded-lg flex items-center justify-center"
        >
          <div >
            <div className="indicator cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-6 lg:w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className=" rounded-md px-1.5 indicator-item bg-[#8FA31E] text-white lg:text-base">
                {itemsLength}
              </p>
            </div>
          </div>
        </Link>
          
        )}
      </li>
    </ul>
  );
};

export default UserBar;
