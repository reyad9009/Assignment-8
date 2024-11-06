import React from "react";

const CardData = ({ cardData }) => {
  const { product_image, product_title, price, description } = cardData;
  return (
    <div className="flex justify-stretch bg-slate-500 gap-4">
      <figure>
        <img src={product_image} alt="Movie" className="w-[100px]" />
      </figure>
      
      <div className="flex items-center w-[100%] justify-between">
        <div className="">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <span>price: $ {price} </span>
        </div>
        <button className="btn">delet</button>
      </div>
    </div>
  );
};

export default CardData;
