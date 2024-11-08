import React, { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import rightLogo from "../../assets/Group.png";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

// import {
//   getStoredReadList,
//   getStoredWishList,
//   deleteFromStoredReadList,
//   deleteFromStoredWishList,
// } from "../../Utility/addToDB";

import CardData from "../CardData/CardData";
import WishList from "../WishList/WishList";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const location = useLocation();
  const {
    addToCard,
    addToWishList,
    deleteCardItem,
    deleteWishListItem,
    setAddToCard,
    addCardItem,
  } = useOutletContext();

  // const [addToCard, setAddToCard] = useState([]);
  // const [addToWishList, setAddToWishList] = useState([]);
  // const [sort, setSort] = useState("");

  //const allGadget = useLoaderData([]);
  // useEffect(() => {
  //   const gadgetsArray = Array.isArray(allGadget) ? allGadget : [allGadget];

  //   const storedGadgetList = getStoredReadList();
  //   const storedGadgetListInt = storedGadgetList.map((id) => parseInt(id));
  //   const addCard = gadgetsArray.filter((gadget) =>
  //     storedGadgetListInt.includes(gadget.product_id)
  //   );

  //   const storedGadgetWishList = getStoredWishList();
  //   const storedGadgetWishListInt = storedGadgetWishList.map((id) =>
  //     parseInt(id)
  //   );
  //   const addWishList = gadgetsArray.filter((gadget) =>
  //     storedGadgetWishListInt.includes(gadget.product_id)
  //   );
  //   console.log();

  //   setAddToCard(addCard);
  //   setAddToWishList(addWishList);
  // }, [allGadget]);

  const [activeTab, setActiveTab] = useState("Tab1");
  const setTab1Color =
    activeTab === "Tab1"
      ? "bg-white text-[#9538e2]"
      : "bg-[#9538e2] text-white";
  const setTab2Color =
    activeTab === "Tab2"
      ? "bg-white text-[#9538e2]"
      : "bg-[#9538e2] text-white";

  const [sort, setSort] = useState("");
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Ratings") {
      const sortedReadList = [...addToCard].sort((a, b) => a.price - b.price);
      setAddToCard(sortedReadList);
    }
  };

  const calculateTotalCost = () => {
    return addToCard.reduce((total, gadget) => total + gadget.price, 0);
  };

  const handleCloseModal = () => {
    setAddToCard([]);
  };
  // const handleDelete = (productId) => {
  //   deleteFromStoredReadList(productId);
  //   setAddToCard((prev) =>
  //     prev.filter((gadget) => gadget.product_id !== productId)
  //   );
  // };

  // const handleDeleteWishList = (productId) => {
  //   deleteFromStoredWishList(productId);
  //   setAddToWishList((prev) =>
  //     prev.filter((gadget) => gadget.product_id !== productId)
  //   );
  // };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
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
            <div className="flex justify-between items-center w-[70%]">
              <h1 className="text-2xl font-bold">Card</h1>
              <div className="flex flex-row gap-7">
                <button className="text-xl font-bold">Total cost: $ {calculateTotalCost()}</button>
                <button
                  className=" flex justify-center items-center gap-3 text-[#9538e2] px-8 py-2 border border-[#9538e2] rounded-full"
                  onClick={() => handleSort("Ratings")}
                >
                  Sort by price <HiMiniAdjustmentsHorizontal />
                </button>

                <button
                  className={`bg-[#9538e2] px-8 py-2 rounded-full text-white ${calculateTotalCost() === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  disabled={calculateTotalCost() === 0}
                >
                  Purchase
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box flex flex-col justify-center items-center gap-3">
                    <img src={rightLogo} alt="" />
                    <p className="py-4">Payment Successfully</p>
                    <p>Thanks for purchasing</p>
                    <p>Total $ {calculateTotalCost()}</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <Link to="/">
                          {" "}
                          <button
                            onClick={handleCloseModal}
                            className="btn bg-[#9538e2] text-white rounded-full text-xl px-6"
                          >
                            Close
                          </button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="flex gap-5 flex-col mt-20">
              {addToCard.map((gadget, product_id) => (
                <CardData
                  key={product_id}
                  cardData={gadget}
                  // deleteCardItem={handleDelete}
                ></CardData>
              ))}
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex gap-5 flex-col mt-5">
              <h1 className="text-xl font-bold">WishList</h1>
            </div>
            <div className="flex gap-5 flex-col mt-20">
              {addToWishList.map((gadget, product_id) => (
                <WishList
                  key={product_id}
                  wishList={gadget}
                  // deleteWishListItem={handleDeleteWishList}
                >
                  {" "}
                </WishList>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
