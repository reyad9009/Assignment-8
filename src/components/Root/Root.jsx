import React, { useState } from "react";
import NavBar from "../NavBer/NavBar";
import { Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
//new


const Root = () => {
  // new
  const [addToCard, setAddToCard] = useState([]);
  const [addToWishList, setAddToWishList] = useState([]);

 //add item to the card
  const addCardItem = (item) => {
    setAddToCard((cartItem) => [...cartItem, item]);
  };


  //add item to the wishlist
  const addWishListItem = (item) => {
    setAddToWishList((cartItem) => [...cartItem, item]);
  };

  //delete item from card
  const deleteCardItem = (productId) => {
    setAddToCard((cartItem) => cartItem.filter((item) => item.product_id !== productId));
  };

  //delete item from wishlist
  const deleteWishListItem = (productId) => {
    setAddToWishList((cartItem) => cartItem.filter((item) => item.product_id !== productId));
  };

  return (
    <div className="">
      <div className="max-w-[100rem] mx-auto">
        <NavBar></NavBar>
      </div>
      {/* <Outlet></Outlet> */}
      <Outlet context={{
        addToCard,
        setAddToCard,
        addToWishList,
        addCardItem,
        addWishListItem,
        deleteCardItem,
        deleteWishListItem
      }} />
      <div className="max-w-[100rem] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
