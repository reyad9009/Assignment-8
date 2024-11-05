import React from "react";
import Banner from "../Banner/Banner";

import {Outlet, useLoaderData } from "react-router-dom";
import GadgetCategory from "../GadgetCategory/GadgetCategory";
import CoffeeCards from "../CoffeeCards/CoffeeCards";

const Home = () => {
  const categories = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <GadgetCategory categories={categories}></GadgetCategory>
      <Outlet></Outlet>  
    </div>
  );
};

export default Home;
