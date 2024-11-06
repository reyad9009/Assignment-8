import React from "react";

const CardData = ({ cardData, onDelete }) => {
  const { product_image, product_title, price, description } = cardData;
  return (
    <div className="flex justify-stretch gap-4 p-4 border rounded-xl">
      <figure>
        <img src={product_image} alt="Movie" className="w-[100px]" />
      </figure>
      
      <div className="flex items-center w-[100%] justify-between">
        <div className="">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <span>price: $ {price} </span>
        </div>
        <button className="btn" onClick={() => onDelete(product_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardData;
