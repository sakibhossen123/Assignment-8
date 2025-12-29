import { Link, NavLink } from "react-router";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#9f62f2]" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#9f62f2]" : "font-bold"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#9f62f2]" : "font-bold"
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex items-center">
            <img className="w-8" src={navLogo} alt="" />
            <h1 className="text-[#9f62f2] font-bold">HERO.IO</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-2 ${isActive ? "font-bold text-[#9f62f2]" : "font-bold"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `mr-2 ${isActive ? "font-bold text-[#9f62f2]" : "font-bold"}`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `mr-2 ${isActive ? "font-bold text-[#9f62f2]" : "font-bold"}`
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          target="_blank"
          to={"https://github.com/"}
          className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2]"
        >
          {""}
          <i className="fa-brands fa-github"></i>Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
