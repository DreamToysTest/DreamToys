'use client'

import React from 'react'
import useApp from './context/useApp'
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const FavoriteList = () => {
    const {FavoriteProducts} = useApp()
console.log(FavoriteProducts)
  return (
    <div className='w-full h-full flex flex-col justify-center items-center  mx-auto my-2'>
        <h1 className='text-[3rem] text-[#04364A]'>قائمة المفضلات</h1>

        {FavoriteProducts?.map((product) => (
            <div className='w-[30rem] h-[10rem] my-8 flex flex-row justify-betwen px-2 py-2'>
                    <div className='w-[30%] h-full  relative'>
    <Image
    className='w-full h-full rounded-lg '
      src={product.Image}
      alt="Icon"
      priority
      width={60}
      height={60}
    />
    <div className='w-full h-[3rem] top-0 absolute flex justify-between px-2'>

    <button className='w-[1.5rem] h-[1.5rem]' ><CiShare2 className='w-full h-full text-[#133e4d]' /></button>
    <button className='w-[1.5rem] h-[1.5rem]' ><CiHeart className='w-full h-full text-[#1c4a5a]' /></button>

    </div>

    </div>


    <div className='w-[20%] h-full flex flex-col items-center'>
        <h1 className='text-[1.2rem]'>{product.NameOfProduct}</h1>
        <h1 className='text-[1.2rem] mt-4'>{product.Price}</h1>

    </div>
            </div>
        ))}
        
    </div>
  )
}

export default FavoriteList