import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, price, product_title, product_image } = gadget;

  return (
    <div className="card card-compact w-96 flex flex-col bg-slate-400">
      <figure>
        <img className="w-12/12" src={product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <span>Price: $ {price}</span>
        <div className="card-actions justify-start">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
