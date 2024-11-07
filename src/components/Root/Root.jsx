import React from "react";
import NavBar from "../NavBer/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="max-w-[100rem] mx-auto">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="max-w-[100rem] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
