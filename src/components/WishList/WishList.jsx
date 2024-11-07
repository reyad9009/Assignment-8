import React from "react";
import { useLocation, useParams } from "react-router-dom";

const WishList = ({ wishList, handleDeleteWishList }) => {
  const location = useLocation();

  const { handleMarkAsRead } = useParams();
  console.log(handleMarkAsRead);
  const { product_image, product_title, price, description, product_id } =
    wishList;
  return (
    <div className="flex justify-stretch gap-4 p-4 border rounded-xl">
      <figure>
        <img src={product_image} alt="Movie" className="w-[200px]" />
      </figure>

      <div className="flex items-center w-[100%] justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p>
            <span className="font-bold">Description</span> {description}
          </p>
          <span>
            <span className="font-bold">price: $</span> {price}{" "}
          </span>
          <button
            className="btn"
            onClick={() => handleMarkAsWishList(product_id)}
          >
            Add to Card
          </button>
        </div>
        <button
          className="btn"
          onClick={() => handleDeleteWishList(product_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WishList;
