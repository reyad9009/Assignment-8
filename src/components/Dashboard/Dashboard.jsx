import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList,deleteFromStoredReadList } from "../../Utility/addToDB";

import CardData from "../CardData/CardData";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const [addToCard, setAddToCard] = useState([]);
  const [addToWishList, setAddToWishList] = useState([]);
  const [sort, setSort] = useState("");

  const allGadget = useLoaderData();
  useEffect(() => {
    const storedGadgetList = getStoredReadList();
    const storedGadgetListInt = storedGadgetList.map((id) => parseInt(id));
    const addCard = allGadget.filter((gadget) =>
      storedGadgetListInt.includes(gadget.product_id)
    );

    const storedGadgetWishList = getStoredWishList();
    const storedGadgetWishListInt = storedGadgetWishList.map((id) =>
      parseInt(id)
    );
    const addWishList = allGadget.filter((gadget) =>
      storedGadgetWishListInt.includes(gadget.product_id)
    );
    setAddToCard(addCard);
    setAddToWishList(addWishList);
  }, []);

  const [activeTab, setActiveTab] = useState("Tab1");
  const setTab1Color =
    activeTab === "Tab1"
      ? "bg-white text-[#9538e2]"
      : "bg-[#9538e2] text-white";
  const setTab2Color =
    activeTab === "Tab2"
      ? "bg-white text-[#9538e2]"
      : "bg-[#9538e2] text-white";

  // for sort
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Ratings") {
      const sortedReadList = [...addToCard].sort((a, b) => a.price - b.price);
      setAddToCard(sortedReadList);
    }
  };
  // Calculate total amount
  const calculateTotalCost = () => {
    return addToCard.reduce((total, gadget) => total + gadget.price, 0);
  };

  // const handleDelete = (productId) => {
  //   console.log("Attempting to delete product with ID:", productId);

  //   // Update the state by filtering out the deleted item
  //   const updatedCardList = addToCard.filter(
  //     (gadget) => gadget.product_id !== productId
  //   );
  //   setAddToCard(updatedCardList);

  //   // Update localStorage by removing the deleted item
  //   const storedList = getStoredReadList();
  //   const updatedStoredList = storedList.filter((id) => parseInt(id) !== productId);

  //   localStorage.setItem("storedList", JSON.stringify(updatedStoredList));
  //   console.log("Updated localStorage read-list:", updatedStoredList);
  // };
// Inside your component
const handleDelete = (productId) => {
  deleteFromStoredReadList(productId); // Remove item from localStorage

  // Update the component's state to reflect deletion in the UI
  setAddToCard((prev) => prev.filter((gadget) => gadget.product_id !== productId));
};


  return (
    <div className="flex flex-col justify-center items-center w-full pb-[50%]">
      <div className="flex flex-col justify-center items-center bg-[#9538e2] w-full">
        <div className="flex flex-col justify-center items-center rounded-b-xl text-white pb-16 w-[100%]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mt-10">
            Dashboard
          </h1>
          <p className="w-[70%] text-[1rem] text-center leading-[1.6rem] my-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex flex-row gap-12">
            <button
              onClick={() => setActiveTab("Tab1")}
              className={`btn px-12 rounded-full ${setTab1Color}`}
            >
              Card
            </button>

            <button
              onClick={() => setActiveTab("Tab2")}
              className={`btn px-12 rounded-full ${setTab2Color}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1000px] mt-10">
        {activeTab === "Tab1" ? (
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-[60%]">
              <h1>Card</h1>
              <div className="flex flex-row gap-7">
                <button>Total cost: ${calculateTotalCost()}</button>
                <button
                  className="text-[#9538e2] px-8 py-2 border border-[#9538e2] rounded-full"
                  onClick={() => handleSort("Ratings")}
                >
                  Sort by price
                </button>
                <button className="bg-[#9538e2] px-8 py-2 rounded-full text-white">
                  Purchase
                </button>
              </div>
            </div>
            <div className="flex gap-5 flex-col mt-20">
              {addToCard.map((gadget, product_id) => (
                <CardData
                  key={product_id}
                  cardData={gadget}
                  handleDelete={handleDelete}
                ></CardData>
              ))}
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex gap-5 flex-col mt-20"> 
              <h1>WishList</h1>
            </div>
            <div className="flex gap-5 flex-col mt-20">
              {addToWishList.map((gadget, product_id) => (
                <WishList key={product_id} wishList={gadget}></WishList>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
