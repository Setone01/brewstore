import React from "react";
import macbook from "../../assets/images/MacBook Pro 14.png";

const PopularCard = ({ image, title, desc, onclick }) => {
    const CardStyles = {
        box1: {
            backgroundColor: "#FFFFFF",
        },
        box2: {
            backgroundColor: "#F9F9F9",
        },
        box3: {
            backgroundColor: "#EAEAEA",
        },
        box4: {
            backgroundColor: "#2C2C2C",
        },
    };
    return (
        <div className=" min-w-[280px] h-[510px] bg-[#F9F9F9] flex justify-center items-center flex-col  rounded-sm">
      <div className="min-w-[280px] h-[250px] overflow-y-hidden">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className=" flex justify-center xs:items-center md:items-start flex-col p-5">
        <h4 className="text-black text-[33px] font-SFL mb-1 capitalize">
          {title}
        </h4>
        <p className="text-[15px] xs:text-center md:text-start xs:px-5 md:px-0 text-[#909090] font-normal mb-3">{desc}</p>
        <div className="">
          <button
            onClick={onclick}
            className="text-[14px] font-normal capitalize ring-[1.1px] ring-black px-8 py-2 rounded-md"
          >
            show now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
