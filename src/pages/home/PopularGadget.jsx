import React from "react";
import PopularCard from "../../components/popular/PopularCard";
import { popularProd } from "../../assets/mockDb";

const PopularGadget = () => {
  return (
    <div className="w-screen mt-3">
      <div className="w-full flex justify-center items-center gap-2 xs:flex-wrap md:flex-nowrap">
        {popularProd &&
          popularProd.map((item) => (
            <PopularCard
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              onclick={item.url}
            />
          ))}
      </div>
    </div>
  );
};

export default PopularGadget;
