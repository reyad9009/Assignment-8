import React from "react";
import { Link } from "react-router-dom";

const GadgetCategory = ({categories}) => {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      {
        categories.map(category => <Link key={category.category} to={`/category/${category.category}`} role='tab' className="tab">{category.category}</Link>)
      }
    </div>
  );
};

export default GadgetCategory;
