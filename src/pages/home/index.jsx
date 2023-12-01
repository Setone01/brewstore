import React from "react";
import Hero from "./Hero";
// import Gadget from "./Gadget";
import Categories from "./Categories";
import PopularGadget from "./PopularGadget";

const index = () => {
  return (
    <div>
      <Hero />
      {/* <Gadget /> */}
      <Categories />
      <PopularGadget/>
    </div>
  );
};

export default index;
