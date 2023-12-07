import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { productList } from "../../assets/mockDb";

const Products = () => {
  return (
    <div className="w-screen max-h-max ">
      <div className="w-[90%] mx-auto">
        <div className="w-full grid xs:grid-cols-2 md:grid-cols-4 xs:gap-3 md:gap-4 mb-12">
          {productList.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              desc={item.desc}
              cost={item.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
