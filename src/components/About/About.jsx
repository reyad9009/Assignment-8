import React from "react";
import { Helmet } from "react-helmet-async";

const About = () =>{
  return (
    <div className="flex flex-col justify-center  items-center w-full">
      <Helmet>
        <title>Gadget Heaven | About</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center bg-[#9538e2] w-full">
        <div className="flex flex-col justify-center items-center rounded-b-xl text-white pb-16 w-[100%]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mt-10">
            About Us
          </h1>
          <p className="w-[70%] text-[1rem] text-center leading-[1.6rem] my-6">
            Welcome to Gadget Dashboard, your one-stop destination for
            discovering the latest and most innovative gadgets! We are
            passionate about connecting people with cutting-edge tech that
            brings excitement, convenience, and smart solutions to everyday
            life.
          </p>

          <p className="w-[70%] text-[1rem] text-center leading-[1.6rem] my-6">
            Our mission is simple: make technology accessible, enjoyable, and
            personalized for every user. At Gadget Dashboard, we provide a
            seamless experience for browsing, sorting, and organizing your
            favorite gadgets, whether they’re trending items or must-have
            devices that you can’t wait to explore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
