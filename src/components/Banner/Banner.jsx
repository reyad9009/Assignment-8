import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#9538e2] rounded-b-xl text-white lg:pb-60 pb-40">
        <h1 className="lg:text-5xl text-3xl font-bold w-[80%] text-center lg:leading-[4rem] leading-[3rem] mt-10">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="lg:w-[50%] w-[80%] text-[1rem] text-center leading-[1.6rem] my-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="dashboard">
          <button className="bg-white text-[#9538e2] font-bold rounded-full px-7 py-3">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="z-20 lg:w-[1100px] lg:h-[600px] rounded-2xl border-white border-4 flex justify-center items-center lg:-mt-44 -mt-24 lg:py-10">
        <img
          src={banner}
          className="lg:w-[1050px] lg:h-[550px] w-[350px] h-[250px] rounded-2xl "
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
