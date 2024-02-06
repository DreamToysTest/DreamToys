'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";

const ShopAccordingToTheCategory = () => {

  const [AllCategories,  setAllCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = await fetch('https://aon-final.onrender.com/category/view')
        let data = await response.json()
        console.log(data, 'data')
        setAllCategories(data)
      } catch (error) {
        console.log(error)
      }
    };

    getCategories()
  }, []);
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-24'>
      <h1 className='text-[3rem] text-[#04364A]'>تسوق حسب الاقسام</h1>
      <div className='w-full h-[10rem] flex flex-between mt-4'>
        {AllCategories?.allCategory?.length > 0 && (
          AllCategories?.allCategory?.map((category) => (
            <div key={category.id} className='w-full h-full flex flex-col justify-center items-center'>
              <div className='w-[6rem] h-[6rem] rounded-full bg-[#BACBD1] flex justify-center items-center'>
                <Image
                  src="/blaster.png"
                  alt="Icon"
                  priority
                  width={60}
                  height={60}
                />
              </div>
              <h1 className='text-[1.6rem] text-[#04364A] mt-2'>{category.name}</h1>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ShopAccordingToTheCategory