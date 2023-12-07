import React from 'react'
import iphone from '../../assets/images/Iphone 14 pro 1.png'

const ProductCard = ({image, desc, cost}) => {
  return (
    <div className="bg-[#f6f6f6] min-w-[180px] h-[330px] mx-auto flex items-center flex-col p-5 rounded-md relative my-auto shadow-sm">
      <div className="w-full h-[40px] flex items-center justify-end mb-3">
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z"
            stroke="#919191"
            strokeOpacity="0.77"
            strokeWidth="1.4"
          />
        </svg>
      </div>
      <div className="w-[120px] h-[120px] mb-3">
        <img className='w-full h-full' src={image} alt="" />
      </div>
      <div className="flex items-center justify-center flex-col ">
              <p className='w-full px-6 text-center text-[14px] font-normal my-auto line-clamp-2 lg:line-clamp-none'>{desc}</p>
              <span className='text-black text-[18px] my-2 font-medium'>${cost}</span>
              <div className="">
                  <button className='bg-black text-[14px] text-white font-medium px-10 py-2 rounded-md capitalize '> buy now</button>
              </div>
      </div>
    </div>
  );
}

export default ProductCard