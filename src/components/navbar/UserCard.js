import React from "react";
import user_logo from "../../Assets/user_icon.png";
import { Link } from "react-router-dom";
const UserCard = () => {
  return (
    <div className="relative flex justify-center items-center space-x-3 md:order-2 rtl:space-x-reverse">
      <button
        type="button"
        className="flex flex-col items-center space-y-2 group"
      >
        <img className="h-7 p-0" src={user_logo} alt="user_logo" />
        <div className="w-full text-center max-w-xs break-words">
          Welcome Rahul Yadav
        </div>

        <div className="absolute top-12 left-1 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <Link
                to="/home/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile Settings
              </Link>
            </li>
            <li>
              <Link
                to="/home/orders"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/home/wishlist"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </button>

      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserCard;
