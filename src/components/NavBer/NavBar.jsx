import { NavLink, useLocation } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  // for changes background color based on the current rout
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const setBgColor = isDashboard ? "bg-white" : "bg-[#9538e2]";
  const setTextColor = isDashboard ? "text-black" : "text-white";

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li><NavLink to='/listedBooks'>Listed Books</NavLink></li> */}
      <li>
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    // <div className={`navbar ${isDashboard ? "bg-white" : "bg-[#9538e2]"}`}>
    <div className={`navbar mt-3 px-14 rounded-t-xl ${setBgColor}`}>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className={`text-2xl ${setTextColor}`}>
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu-horizontal flex gap-4 text-lg ${setTextColor}`}>{links}</ul>
      </div>
      <div className="navbar-end flex gap-6">
      <span className={`${setTextColor} text-xl`}> <LuShoppingCart /></span>
        <span className={`${setTextColor} text-xl`}><GiSelfLove /></span>
      
      </div>
    </div>
  );
};

export default NavBar;
