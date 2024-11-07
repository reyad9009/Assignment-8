import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, price, product_title, product_image } = gadget;

  return (
    <div className="card card-compact lg:w-[25rem] w-[23rem]  h-[30rem] flex flex-col items-center lg:items-start">
      <figure>
        <img className="w-[350px]" src={product_image} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-grow justify-end">
        <h2 className="card-title">{product_title}</h2>
        <span>Price: $ {price}</span>
        <div className="card-actions justify-start">
          <Link to={`/gadgets/${product_id}`}>
            <button className="px-6 py-3 font-bold rounded-full text-[#b574eb] border border-[#b574eb]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
