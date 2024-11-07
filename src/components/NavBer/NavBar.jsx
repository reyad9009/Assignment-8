import { NavLink, useLocation, useParams } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  const location = useLocation();
  const { product_id } = useParams();

  const changeNavColor = [
    "/dashboard",
    `/gadgets/${product_id}`,
    "/about",
    "/statistics",
  ];
  const isChangeNavColor = changeNavColor.includes(location.pathname);

  const bgColor = isChangeNavColor ? "bg-white" : "bg-[#9538e2]";
  const textColor = isChangeNavColor ? "text-black" : "text-white";
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${textColor}` : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-[#9538e2] font-bold" : `${textColor}`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#9538e2] font-bold" : `${textColor}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#9538e2] font-bold" : `${textColor}`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar lg:mt-3 px-14 lg:rounded-t-xl ${bgColor}`}>
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
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${textColor}`}
          >
            {links}
          </ul>
        </div>
        <a className={`text-2xl font-bold ${textColor}`}>Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu-horizontal flex gap-12 text-lg ${textColor}`}>
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-6">
        <span className={`${textColor} text-xl`}>
          <LuShoppingCart />
        </span>
        <span className={`${textColor} text-xl`}>
          <GiSelfLove />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
