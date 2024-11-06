import React from "react";

const CardData = ({ cardData }) => {
  const { product_image, product_title, price, description, } = cardData;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={product_image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <span>{description}</span>
        <span>price: $ {price} </span>
      </div>
      <button className="btn">delet</button>
    </div>
  );
};

export default CardData;
