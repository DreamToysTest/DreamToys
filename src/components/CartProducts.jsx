"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import useApp from "./context/useApp";
import { GoPlus } from "react-icons/go";
import { GoMinus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import DeleteProductFromCart from "./DeleteProductFromCart";
import { set } from "react-hook-form";
import axios from "axios";
const CartProducts = () => {
  const { accessToken, userInfo } = useApp()

  const [CartProducts, setCartProducts] = useState([]);
  console.log(accessToken)
  useEffect(() => {
    axios.get(
      "https://aon-final.onrender.com/cart/userView",
      {
        headers: {
          'Content-Type':'application/json',
          'token' : accessToken,
        },
      }
    ).then((response) => {
      console.log(response,"response")

      setCartProducts(response.data.basket)
    })
  },[])

  
  // const [totalPrice, setTotalPrice] = useState(0)

  // useEffect(() => {
  //     const totalPrice = CartProducts.reduce((acc, product) => {
  //         return acc + (product.product.price * product.quantity);
  //     }, 0);
  //     setTotalPrice(totalPrice);
  // }, [CartProducts])

  
  console.log(CartProducts)
  return (
    <main className="w-full h-full flex flex-col justify-center items-center  small:px-2">
      <h1 className="text-[3rem] text-[#04364A]">السلة</h1>
      <div className="lg:w-[45rem] md:w-[40rem] small:w-full h-ful flex flex-col justify-center items-center ">
        {CartProducts?.length > 0 &&
          CartProducts?.map((product) => (
            <div key={product.product.id} className="w-full lg:h-[15rem] md:h-[15rem] small:h-[8rem] border-[0.2rem] border-[#BACBD1] my-4 flex flex-row justify-betwen px-2 py-2 rounded-xl">
              <div className="w-[40%]  h-full flex lg:flex-row md:flex-col-reverse small:flex-col-reverse items-center justify-center">
                <div className="lg:w-[50%]  h-full flex justify-center items-end lg:mb-12 ">
                  <DeleteProductFromCart productID={product.product.id} />
                </div>

                <div className="lg:w-[50%] h-full flex justify-center items-end lg:mb-12 ml-2">
                  {/* <button
                    onClick={() => AddQuantity(product.id)}
                    className="lg:w-[2rem] lg:h-[2rem] md:w-[1.8rem] md:h-[1.8rem] small:w-[1.4rem] small:h-[1.4rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center mr-2"
                  >
                    <GoPlus className="w-[2rem] h-[2rem] text-white" />
                  </button> */}
                  <h1 className="text-center lg:text-[1.4rem]  md:text-[1.2rem] small:text-[1rem]">
                    {/* {product.quantity} */}
                  </h1>
                  {/* <button
                    onClick={() => subtractQuantity(product.id)}
                    className="lg:w-[2rem] lg:h-[2rem] md:w-[1.8rem] md:h-[1.8rem] small:w-[1.4rem] small:h-[1.4rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center ml-2"
                  >
                    <BiMinus className="w-[2rem] h-[2rem] text-white" />
                  </button> */}
                </div>
              </div>

              <div className="w-[60%]  h-full flex flex-row items-center just">
                <div className="w-[50%]  h-full flex flex-col items-center md:justify-center small:justify-center">
                  <h1 className="lg:text-[1.2rem] md:text-[1rem] small:text-[0.8rem] text-center">
                    {product.product.title}
                  </h1>
                  <h1 className="lg:text-[1.2rem] md:text-[1rem] small:text-[0.8rem] mt-4">
                    {" "}
                    {product.product.price }
                  </h1>
                </div>

                <div className="w-[50%] h-full  relative">
                  <Image
                    className="w-full h-full rounded-lg "
                    src={product.product.image}
                    alt="Icon"
                    priority
                    fill
                  />
                  <div className="w-full h-[3rem] top-2 absolute flex justify-between px-2">
                    <button className="w-[1.5rem] h-[1.5rem]">
                      <CiShare2 className="w-full h-full text-[#133e4d]" />
                    </button>
                    <button className="w-[1.5rem] h-[1.5rem]">
                      <CiHeart className="w-full h-full text-[#1c4a5a]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="w-full h-[18rem] flex flex-col py-8">
          <div className="w-full h-full flex flex-row">
            <div className="w-[50%] h-full flex justify-end">
              <h1 className="text-[1.6rem] text-[#04364A] font-medium">
                1000
              </h1>
            </div>

            <div className="w-[50%] h-full flex justify-end">
              <h1 className="text-[1.6rem] text-[#04364A] font-medium">
                المجموع
              </h1>
            </div>
          </div>

          <Link
            href="/cart/checkout"
            className="w-full h-[5rem] flex justify-center items-center bg-[#3F6F7F] text-white text-[1.6rem] rounded-lg"
          >
            {" "}
            الدفع{" "}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CartProducts;
