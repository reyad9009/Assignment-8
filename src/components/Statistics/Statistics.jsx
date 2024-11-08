import React from "react";
import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center bg-[#9538e2] w-full">
        <div className="flex flex-col justify-center items-center rounded-b-xl text-white pb-16 pt-5 w-[100%]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mt-10">
            Statistics
          </h1>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-[10%]">
        <h1 className="text-5xl font-extrabold text-red-600">No data here</h1>
        <Link to="/">
          <button className="bg-[#9538e2] py-4 px-8 rounded-full text-xl text-white mt-10">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Statistics;
