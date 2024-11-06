import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { LuShoppingCart } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import "@smastrom/react-rating/style.css";

import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../Utility/addToDB";

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

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleMarkAsWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-[#9538e2] w-full">
        <div className="flex flex-col justify-center items-center rounded-b-xl text-white pb-32 w-[100%]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mt-10">
            Product Details
          </h1>
          <p className="w-[70%] text-[1rem] text-center leading-[1.6rem] my-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="z-20 rounded-2xl border-white flex justify-center items-center -mt-44 py-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product_image} alt="Movie" />
          </figure>
          <div className="card-body flex flex-col gap-4">
            <h2 className="card-title">{product_title}</h2>
            <span>Price: $ {price}</span>
            <div>
              {availability ? <span className="border-2 border-[#309c08] text-lg px-2 py-1 rounded-full text-[#309c08] font-bold">In Stock</span> : <span className="border-2 border-red-600 text-lg px-2 py-1 rounded-full text-red-600 font-bold">No Stock</span>}
            </div>
            <span>{description}</span>
            <span className="font-bold text-xl">Specification:</span>
            <ul className="">
              {Specification &&
                Specification.map((spec, ind) => (
                  <li key={ind}>
                    {" "}
                    {ind + 1}. {spec}
                  </li>
                ))}
            </ul>
            <span className="font-bold text-xl">Rating ⭐</span>
            <div className="flex gap-5 items-center">
              <Rating style={{ maxWidth: 150 }} readOnly value={rating} />
              <span>{rating}</span>
            </div>

            <div className="flex gap-16">
              <button
                onClick={() => handleMarkAsRead(product_id)}
                className="btn btn-primary  bg-[#9538e2] border-none rounded-full font-bold px-6" 
              >
                Add To Card
                <span className="text-white font-bold text-2xl">
                  <LuShoppingCart />
                </span>
              </button>

              <button onClick={() => handleMarkAsWishList(product_id)}>
                <span className="text-2xl">
                  <GiSelfLove />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetail;
