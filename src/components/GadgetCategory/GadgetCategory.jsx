import React from "react";
import { Link } from "react-router-dom";

const GadgetCategory = ({categories}) => {
  return (
    <div>
     
      <div className="flex flex-col justify-center items-start gap-9">
      <Link to='/'><button className="bg-orange-300 btn">All</button></Link>
      {
        categories.map(category => <Link key={category.category} to={`/category/${category.category}`} className=""><button className="btn px-10 bg-orange-500 rounded-full">{category.category}</button></Link>)
      }
    </div>
    </div>
  );
};

export default GadgetCategory;
