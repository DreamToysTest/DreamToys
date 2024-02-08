'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { LeftArrow,RightArrow,Arrow,TaskCategoryButton } from "./HorizontalScrolling";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
const ShopAccordingToTheCategory = () => {

  const [AllCategories,  setAllCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = await fetch('https://aon-final.onrender.com/category/view')
        let data = await response.json()
        setAllCategories(data)
      } catch (error) {
        console.log(error)
      }
    };

    getCategories()
  }, []);
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-24'>
      <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-[#04364A]'>تسوق حسب الاقسام</h1>
      <div className='w-full h-[10rem] flex flex-between mt-4 lg:flex md:hidden small:hidden'>
        {AllCategories?.category?.length > 0 && (
          AllCategories?.category?.map((category) => (
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

      <div className='w-full h-[12rem]  mt-4 lg:hidden md:block small:block overflow-x-auto	'>
      {AllCategories?.category?.length > 0 && (
        <ScrollMenu RTL={true}  scrollToSelected={false} >
          {AllCategories?.category?.map((category,index) => (
            <TaskCategoryButton
            key={index}
            id={category.id}
            name={category.name}
             />
          ))}
        </ScrollMenu>
      )}
      </div>


    </section>
  );
}

export default ShopAccordingToTheCategory