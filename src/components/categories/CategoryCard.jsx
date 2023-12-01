import React from "react";

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="xs:min-w-[11.4rem] md:min-w-[11.5rem] h-[8rem] bg-[#EDEDED] flex justify-center items-center flex-col rounded-lg my-[0.14rem]">
      <div className="mb-3">{icon}</div>
      <div className="">
        <h6 className="text-center text-sm text-black font-medium capitalize">{title}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;
