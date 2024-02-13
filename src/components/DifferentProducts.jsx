"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Cards from "./Cards";
import { TaskProductButton } from "./HorizontalScrolling";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
const DifferentProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await fetch(
          "https://aon-final.onrender.com/product/view"
        );
        let data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  console.log(AllProducts);

  return (
    <section className="w-full h-full flex flex-col justify-center items-center   my-8">
      <div className="w-full h-[8rem] flex justify-between items-center px-2">
        <button className="border-[0.1rem] border-[#BF539B] lg:w-[12rem] md:w-[12rem] small:w-[10rem] h-[3rem] rounded-lg flex justify-center items-center">
          <FaArrowLeftLong className="text-[#BF539B]" />
          <h1 className="text-[#BF539B] text-[1rem] font-medium ml-4">
            رؤية جميع المنتجات
          </h1>
        </button>

        <h1 className="lg:text-[3rem] md:text-[2rem] small:text-[1.6rem]  text-[#04364A]">
          مختلف المنتجات
        </h1>
      </div>

      <div className="w-full h-full mt-auto flex flex-row justify-between items-center lg:flex md:hidden small:hidden ">
        {AllProducts?.product?.length > 0 &&
          AllProducts?.product
            ?.slice(0, 4)
            .map((product) => <Cards key={product.id} product={product} />)}
      </div>

      <div className="w-full h-full mt-auto  lg:hidden md:block small:block overflow-x-auto	">
        {AllProducts?.product?.length > 0 && (
          <ScrollMenu RTL={true} scrollToSelected={false}>
            {AllProducts?.product?.map((product, index) => (
              <TaskProductButton key={product.id} product={product} />
            ))}
          </ScrollMenu>
        )}
      </div>
    </section>
  );
};

export default DifferentProducts;
