import React from "react";
import Banner from "../Banner/Banner";

import { Outlet, useLoaderData } from "react-router-dom";
import GadgetCategory from "../GadgetCategory/GadgetCategory";
import HeaderTxt from "../GadgetCategory/HeaderTxt";


const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
     <div className="max-w-[100rem] mx-auto"> <Banner></Banner></div>
     <div>
      <HeaderTxt></HeaderTxt>
     </div>
      <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center my-16 gap-10">
        <GadgetCategory categories={categories}></GadgetCategory>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
