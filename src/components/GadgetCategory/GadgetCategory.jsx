import React from "react";
import { NavLink } from "react-router-dom";

const GadgetCategory = ({ categories }) => {
  return (
    <div>
      <div className="flex flex-col justify-center lg:items-start lg:gap-9 mt-14">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#9538e2] text-white font-bold px-10 btn rounded-full"
              : "bg-white px-10 btn rounded-full"
          }
        >
          All Product
        </NavLink>

        {categories.map((category) => {
          return (
            <NavLink
              key={category.category}
              to={`/category/${category.category}`}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#9538e2] text-white font-bold px-10 btn rounded-full"
                  : "bg-white px-10 btn rounded-full"
              }
            >
              {category.category}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default GadgetCategory;
