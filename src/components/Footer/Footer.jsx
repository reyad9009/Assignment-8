import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-[10%]">
      <div>
        <h1 className="text-2xl font-extrabold pb-4">Gadget Heaven</h1>
        <p className="text-xl pb-9">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer text-black p-10 flex lg:flex-row flex-col  justify-center items-center lg:items-start lg:gap-80 gap-10">
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
