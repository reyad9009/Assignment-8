import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { LuShoppingCart } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import "@smastrom/react-rating/style.css";

const GadgetsDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);

  const gadget = [...data].find((gadget) => gadget.product_id === id);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = gadget;

  //console.log(product_id, id, gadget);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={product_image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <span>Price: $ {price}</span>
        <span>
          {availability ? <span>In Stock</span> : <span>No Stock</span>}
        </span>
        <span>{description}</span>
        <span>Specification:</span>
        <ul className="">
          {Specification &&
            Specification.map((spec, ind) => (
              <li key={ind}>
                {" "}
                {ind + 1}. {spec}
              </li>
            ))}
        </ul>
        <span>Rating ⭐</span>
        <div className="flex gap-5 items-center">
          <Rating style={{ maxWidth: 250 }} readOnly value={rating} />
          <span>{rating}</span>
        </div>

        <div>
          <button className="btn btn-primary">
            Add To Card
            <span>
              <LuShoppingCart />
            </span>
          </button>
          <button>        <span className=""><GiSelfLove /></span></button>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetail;
