import React from "react";
import Banner from "../Banner/Banner";

import { Outlet, useLoaderData } from "react-router-dom";
import GadgetCategory from "../GadgetCategory/GadgetCategory";


const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
     <div className="max-w-[100rem] mx-auto"> <Banner></Banner></div>
      <div className="flex flex-row justify-center items-start my-40 gap-10">
        <GadgetCategory categories={categories}></GadgetCategory>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
