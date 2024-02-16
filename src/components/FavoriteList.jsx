'use client'

import React, { useEffect, useState } from 'react'
import useApp from './context/useApp'
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import axios from 'axios';
import Link from 'next/link';
import DeleteProductFromCart from './DeleteProductFromCart';
import { GoPlus } from "react-icons/go";
import {BiMinus} from "react-icons/bi"
const FavoriteList = () => {
  const [ FavoriteProducts,setFavoriteProducts ] = useState([])
  const { accessToken } = useApp()
  useEffect(() => {
    axios.get(
      "https://aon-final.onrender.com/wishlist/userView",
      {
      headers: {
        'Content-Type': 'application/json',
        'token' : accessToken,
      },
    }).then((response) => {
      setFavoriteProducts(response.data.wishlist)
    })
  },[])


  //Delete Product 

  const DeleteProduct = (productID) =>{
    axios.delete(
      `https://aon-final.onrender.com/wishlist/delete/${productID}`,
      {
        header: {
          'Content-Type': 'application/json',
          'token' : accessToken,  
        },
      }).then((response) =>{
        console.log("deleted")
      })
  }

  const AddToCart = (product) => {
    const response = axios.post("https://aon-final.onrender.com/cart/add", 
    {
      purchase_type: "توصيل",
      productId: product.id,
    },{
      headers: {
        'Content-Type': 'application/json',
        'token' :accessToken
      },
    });
    console.log(response)
  }
  return (
<main className="w-full h-full flex flex-col justify-center items-center  small:px-2">
      <h1 className="text-[3rem] text-[#04364A]">المفضلة</h1>
      <div className="lg:w-[45rem] md:w-[40rem] small:w-full h-ful flex flex-col justify-center items-center ">
        {FavoriteProducts?.length > 0 &&
          FavoriteProducts?.map((product) => (
            <div key={product.product.id} className="w-full lg:h-[15rem] md:h-[15rem] small:h-[8rem] border-[0.2rem] border-[#BACBD1] my-4 flex flex-row justify-betwen px-2 py-2 rounded-xl">
              <div className="w-[40%]  h-full flex lg:flex-row md:flex-col-reverse small:flex-col-reverse items-center justify-center">
                <div className="w-full  h-full flex justify-center items-end lg:mb-12 ">
                <button
        onClick={()=> AddToCart(product)}
          className='w-full h-[2.5rem] rounded-lg bg-[#3F6F7F] text-white flex justify-center items-center '
        >
          اضف للسلة
        </button>

                </div>

                <div className="w-full h-full flex justify-center items-end lg:mb-12 ml-2">
                  <button
                    className="lg:w-[2rem] lg:h-[2rem] md:w-[1.8rem] md:h-[1.8rem] small:w-[1.4rem] small:h-[1.4rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center mr-2"
                  >
                    <GoPlus className="w-[2rem] h-[2rem] text-white" />
                  </button>
                  <h1 className="text-center lg:text-[1.4rem]  md:text-[1.2rem] small:text-[1rem]">
                    3
                  </h1>
                  <button
                    className="lg:w-[2rem] lg:h-[2rem] md:w-[1.8rem] md:h-[1.8rem] small:w-[1.4rem] small:h-[1.4rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center ml-2"
                  >
                    <BiMinus className="w-[2rem] h-[2rem] text-white" />
                  </button>
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
                    <button onClick={DeleteProduct(product.product.id)} className="w-[1.5rem] h-[1.5rem]">
                      <IoHeart className="w-full h-full text-[#1c4a5a] fill-red-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}

export default FavoriteList