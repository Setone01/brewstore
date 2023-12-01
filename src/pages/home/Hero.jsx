import React from "react";
import Iphone from "../../assets/images/Iphone Image.png";

const Hero = () => {
  return (
    <div className="w-screen h-[90vh] bg-gradient-to-r from-[#211c24] from-0.64% to-[#211c24] to-101% xs:mt-[5rem] md:mt-[6.5rem] overflow-hidden z-20">
      <div className="w-[90%] h-full mx-auto flex justify-between items-center xs:flex-col md:flex-row xs:pt-16">
        <div className=" min-w-[400px] flex justify-center flex-col mb-4 ">
          <p className="text-[1.5rem] text-[#fff] font-normal xs:text-center md:text-start pb-2 mb-2 opacity-40">
            Pro.Beyond.
          </p>
          <h2 className="w-full text-white xs:text-center md:text-start xs:text-[4.5rem] md:text-8xl xs:px-3 md:px-0 font-medium leading-[4.5rem]">
            <span className="font-SFT">IPhone 14</span> Pro
          </h2>
          <span className="text-[#909090] text-[1.1rem] font-SFL xs:px-4 md:px-0 pt-2 xs:text-center md:text-start">
            Created to change everything for the better. For everyone
          </span>
          <div className="mt-4 xs:text-center md:text-start">
            <button className=" text-white text-[14px] capitalize ring-[1.1px] font-normal tracking-wider font-SFL px-10 py-2 ring-greyText rounded-md z-10">
              show now
            </button>
          </div>
        </div>
        <div className="w-[406px] flex justify-end items-center px-10 ">
          <img
            className=" w-full h-full xs:mt-20 md:-mb-28"
            src={Iphone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
