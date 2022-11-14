import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <Link className="mr-2 btn btn-ghost" to="/">
        Home
      </Link>
      <Link className="mr-2 btn btn-ghost" to="/about">
        About
      </Link>
      <Link className="mr-2 btn btn-ghost" to="appointment">
        Appoiments
      </Link>
      <Link className="mr-2 btn btn-ghost" to="reviews">
        Reviews
      </Link>
      <Link className="mr-2 btn btn-ghost" to="/contact">
        Contact Us
      </Link>
      <Link className="mr-2 btn btn-ghost" to="login">
        Login
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex px-5 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctores Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
