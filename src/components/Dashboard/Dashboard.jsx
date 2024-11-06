import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../../Utility/addToDB"; 

import CardData from "../CardData/CardData";
import WishList from "../WishList/WishList";


const Dashboard = () => {
    const [addToCard, setAddToCard] = useState([]);
    const [addToWishList, setAddToWishList] = useState([])

    const allGadget = useLoaderData();
    useEffect(() => {
        const storedGadgetList = getStoredReadList();
        const storedGadgetListInt = storedGadgetList.map((id) => parseInt(id));
    
        //console.log(storedGadgetList, storedGadgetListInt, allGadget);
        const addCard = allGadget.filter((gadget) =>
          storedGadgetListInt.includes(gadget.product_id));

//////////////////////////////
        const storedGadgetWishList = getStoredWishList();
        const storedGadgetWishListInt = storedGadgetWishList.map((id) => parseInt(id));
    
        //console.log(storedGadgetList, storedGadgetListInt, allGadget);
        const addWishList = allGadget.filter((gadget) =>
          storedGadgetWishListInt.includes(gadget.product_id)
        
        );
        setAddToCard(addCard);
        setAddToWishList(addWishList);
      }, []);


  const [activeTab, setActiveTab] = useState("Tab1");
  const setTab1Color =
    activeTab === "Tab1"
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-gray-700";
  const setTab2Color =
    activeTab === "Tab2"
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-gray-700";

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-32">
        <button
          onClick={() => setActiveTab("Tab1")}
          className={`btn ${setTab1Color}`}
        >
          Card
        </button>

        <button
          onClick={() => setActiveTab("Tab2")}
          className={`btn ${setTab2Color}`}
        >
          Wishlist
        </button>
      </div>

      <div className="p-4 border border-t-0 w-[1000px]" >
        {activeTab === "Tab1" ? (
          <div className="">
            <div className="flex gap-5 flex-col">
            {
                addToCard.map((gadget, product_id)=> <CardData key={product_id} cardData={gadget}></CardData>)
            }
            </div>
          </div>
        ) : (
          <div>
            {
                addToWishList.map((gadget, product_id)=> <WishList key={product_id} wishList={gadget}></WishList>)
            }
            <h2 className="text-lg font-bold">Content for Tab 2</h2>
            <p>This is the content for the second tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
