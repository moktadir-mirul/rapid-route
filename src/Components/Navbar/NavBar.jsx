import React from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const Links = (
    <>
      <NavLink to={"/"} className="font-medium">Home</NavLink>
      <NavLink to={"/dashboard"} className="font-medium">DashBoard</NavLink>
    </>
  );
  return (
    <div className="w-11/12 mx-auto my-5 shadow-sm bg-white rounded-xl">
      <div className="navbar px-5" id="navLinks">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-lg rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 text-lg">{Links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link>
            <button className="btn bg-gray-50 border-2 border-gray-300 hover:bg-lime-500 duration-200">Login</button>
          </Link>
          <Link>
            <button className="btn bg-lime-300 hover:bg-lime-500 duration-200">Be a Rider</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
