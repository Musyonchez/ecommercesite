import React from "react";
import Shirts from "./Shirts";
import Collection from "./Collection";
import Cotton_Shirt from "./Individuals/Cotton_Shirt";
import Group from "./Group";
import Three_items from "./Individuals/Three_items";
import Outfit from "./Outfit";

const Products = () => {
  return (
    <div className=" flex flex-col p-1 space-y-2">
     <Shirts />
     <Cotton_Shirt />
     <Collection />
     <Group />
     <Outfit />
     <Three_items />
    </div>
  );
};

export default Products;
