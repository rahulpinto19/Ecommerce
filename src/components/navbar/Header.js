import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../../Assets/logo-no-background.png";
import UserCard from "./UserCard";
import Products from "../Products";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0" style={{ height: '60px' }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={handleLogoClick}
          >
            <img src={logo} className="h-8" alt="Page_logo" />
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <SearchBar />
              </li>
              <li>
                <Cart />
              </li>
              <li>
                <UserCard />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
