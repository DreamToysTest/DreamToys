import React, { useEffect, useState } from 'react'
import Image from "next/image";
import axios from 'axios';
import useApp from './context/useApp';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow,RightArrow,Arrow,TaskCategoryButton } from "../components/HorizontalScrolling";
const ShopAccordingToTheCharacters = () => {
  const { accessToken } = useApp()
  const [tags, setTags] = useState([])
  const getTags = () => {
    axios.get(
      "https://aon-final.onrender.com/tag/view",
      {
        headers: {
          "Content-Type": "application/json",
          "token": accessToken,
        },
        withCredentials: false
      }
    ).then((response) => {
      setTags(response.data.tag)
    })
  }



  useEffect(() => {
    getTags()
  }, [])
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-8' >
        <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-[#04364A]'>تسوق حسب الشخصيات</h1>
        <div className='w-full h-[10rem] flex flex-between mt-4 lg:flex md:hidden small:hidden'>
        {tags?.length > 0 && (
          tags?.map((tag) => (
            <div key={tag.id} className='w-full h-full flex flex-col justify-center items-center'>
              <div className='w-[6rem] h-[6rem] rounded-full bg-[#BACBD1] flex justify-center items-center'>
                <Image
                  src="/blaster.png"
                  alt="Icon"
                  priority
                  width={60}
                  height={60}
                />
              </div>
              <h1 className='text-[1.6rem] text-[#04364A] mt-2'>{tag.name}</h1>
            </div>
          ))
        )}
      </div>

      <div className='w-full h-[12rem]  mt-4 lg:hidden md:block small:block overflow-x-auto	'>
      {tags?.length > 0 && (
        <ScrollMenu RTL={true}  scrollToSelected={false} >
          {tags.map((tag,index) => (
            <TaskCategoryButton
            key={index}
            id={tag.id}
            name={tag.name}
             />
          ))}
        </ScrollMenu>
      )}
      </div>
        </section>
  )
}

export default ShopAccordingToTheCharacters