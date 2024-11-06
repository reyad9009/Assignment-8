import React from "react";
import { Link, useLocation } from "react-router-dom";

const GadgetCategory = ({ categories }) => {
  const location = useLocation();
  
  // Check if we're on the "All" page or a category page
  const isAllActive = location.pathname === "/";
  
  return (
    <div>
      <div className="flex flex-col justify-center items-start gap-9">
        {/* "All" button */}
        <Link to="/">
          <button className={`px-10 btn rounded-full ${isAllActive ? "bg-[#b574eb]" : "bg-white"}`}>
            All
          </button>
        </Link>
        
        {/* Category buttons */}
        {categories.map((category) => {
          const isActive = location.pathname === `/category/${category.category}`;
          const buttonColor = isActive ? "bg-[#b574eb]" : "bg-white";

          return (
            <Link key={category.category} to={`/category/${category.category}`}>
              <button className={`btn px-10 rounded-full ${buttonColor}`}>
                {category.category}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GadgetCategory;
