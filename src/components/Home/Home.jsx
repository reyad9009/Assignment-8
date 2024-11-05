import React from "react";
import Banner from "../Banner/Banner";

import { Outlet, useLoaderData } from "react-router-dom";
import GadgetCategory from "../GadgetCategory/GadgetCategory";
//import CoffeeCards from "../CoffeeCards/CoffeeCards";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
     <div className="max-w-[100rem] mx-auto"> <Banner></Banner></div>
      <div className="flex flex-row justify-center items-start my-20">
        <GadgetCategory categories={categories}></GadgetCategory>
        {/* <CoffeeCards></CoffeeCards> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
