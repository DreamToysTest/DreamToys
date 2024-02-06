'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Cards from './Cards';
const DifferentProducts = () => {
  const [AllProducts,  setAllProducts] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await fetch('https://aon-final.onrender.com/product/view')
        let data = await response.json()
        console.log(data, 'data')
        setAllProducts(data)
      } catch (error) {
        console.log(error)
      }
    };

    getProducts()
  }, []);


  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-8'>
        <div className='w-full h-[8rem] flex justify-between items-center'>
        <button className='border-[0.1rem] border-[#BF539B] w-[12rem] h-[3rem] rounded-lg flex justify-center items-center'>
        <FaArrowLeftLong className='text-[#BF539B]'/>
            <h1 className='text-[#BF539B] text-[1rem] font-medium ml-4'>رؤية جميع المنتجات</h1>
            </button>

            <h1 className='text-[3rem]  text-[#04364A]'>مختلف المنتجات</h1>
        </div>

        <div className='w-full h-full mt-auto flex flex-row justify-between items-center '>
          {AllProducts?.allProduct?.length > 0 && (
          AllProducts?.allProduct?.slice(0,4).map((product)=>(
                        <Cards key={product.id} product={product}  />
            ))
          )}


        </div>

    </section>
  )
}

export default DifferentProducts