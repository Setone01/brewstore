import React from "react";
import Hero from "./Hero";
// import Gadget from "./Gadget";
import Categories from "./Categories";
import PopularGadget from "./PopularGadget";
import Products from "./Products";

const index = () => {
  return (
    <div>
      <Hero />
      {/* <Gadget /> */}
      <Categories />
      <Products/>
      <PopularGadget/>
    </div>
  );
};

export default index;
