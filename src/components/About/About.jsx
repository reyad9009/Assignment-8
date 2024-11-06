import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full p-8 bg-[#f4f4f4]">
      <h1 className="text-4xl font-bold text-[#9538e2] mb-6">About Us</h1>
      <p className="text-center text-lg w-3/4 lg:w-1/2 mb-8">
        Welcome to the Gadget Dashboard! We are dedicated to providing you with the latest and most innovative gadgets
        that enhance your everyday life. Our platform offers a wide variety of smart devices, accessories, and more,
        all in one place for your convenience.
      </p>
      <p className="text-center text-lg w-3/4 lg:w-1/2 mb-8">
        At Gadget Dashboard, we focus on delivering an intuitive and interactive shopping experience. Whether you're
        adding items to your cart, saving them to your wishlist, or sorting them by price, our goal is to make your
        shopping journey easy and enjoyable.
      </p>
      <p className="text-center text-lg w-3/4 lg:w-1/2">
        We believe in simplicity, convenience, and making technology accessible to everyone. With our responsive and
        dynamic platform, you can explore gadgets and manage your list of favorites anytime, anywhere.
      </p>
    </div>
    );
};

export default About;