import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/addToDB"; 
import Gadget from "../Gadget/Gadget";
import CardData from "../CardData/CardData";
//import Gadget from "../Gadget/Gadget";
//import Gadget from "../Gadget/Gadget";

const Dashboard = () => {
    const [readList, setReadList] = useState([]);
    
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id) => parseInt(id));
    
        console.log(storedReadList, storedReadListInt, allBooks);
    
        const readBookList = allBooks.filter((book) =>
          storedReadListInt.includes(book.product_id)
        );
    
        setReadList(readBookList);
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

      <div className="p-4 border border-t-0">
        {activeTab === "Tab1" ? (
          <div>
            <h2 className="text-lg font-bold">Content for Tab 1</h2>
            <p>This is the content for the first tab.</p>
            {/* {
                readList.map((gadget, product_id) => <Gadget key={product_id} gadget={gadget}></Gadget>)
            } */}
            {
                readList.map((gadget, product_id)=> <CardData key={product_id} cardData={gadget}></CardData>)
            }
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold">Content for Tab 2</h2>
            <p>This is the content for the second tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
