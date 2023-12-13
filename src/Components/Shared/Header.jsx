import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/bookings">My Bookings</NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={signOutUser}>Sign Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar section py-12 justify-between">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost h-full">
          <img className="h-20" src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 text-base font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-5 w-auto">
        <img src={cart} />
        <img src={search} />
        <button className="ml-2 btn bg-white border-primaryColor shadow-none px-7 py-3 h-auto text-primaryColor text-lg font-semibold">
          <span className="-translate-y-[1px]">Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
