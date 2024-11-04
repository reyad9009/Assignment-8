import React from "react";
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#9538e2] rounded-b-xl text-white pb-60">
        <h1 className="text-5xl font-bold w-[80%] text-center leading-[4rem] mt-10">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-[50%] text-[1rem] text-center leading-[1.6rem] my-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-[#9538e2] font-bold rounded-full px-7 py-3">
          Shop Now
        </button>
      </div>
      <div className="z-20 w-[1100px] h-[600px] rounded-2xl border-white border-4 flex justify-center items-center -mt-44 py-10">
        <img src={banner} className="w-[1050px] h-[550px] rounded-2xl " alt="" />
      </div>
    </div>
  );
};

export default Banner;
