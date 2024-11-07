import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const GadgetCards = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadgets) => gadgets.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data);
    }
  }, [category, data]);

  console.log(data);
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gadgets.map((gadgets) => (
          <Gadget key={gadgets.product_id} gadget={gadgets}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default GadgetCards;
