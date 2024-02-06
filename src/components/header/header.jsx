'use client'
import Image from "next/image";
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import Link from 'next/link';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { PiCoinsLight } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import {ROUTES} from "./routes"
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SideBar from "../SideBar";

const Header = () => {

    
    const categories = [
        // {
        //     id: 1,
        //     title:"Coins",
        //     icon:<PiCoinsLight className="w-[2rem] h-[2rem] text-[#BACBD1]" />

        // },
        {
            id: 2,
            title:"الصفحة الرئيسية",
            icon:<IoMdHome className="w-[3rem] h-[3rem] text-[#BACBD1]" />,
            components:ROUTES.home


        },
        {
            id: 3,
            title:"المفضلة",
            icon:<IoIosHeartEmpty className="w-[3rem] h-[3rem] text-[#BACBD1]" />,
            components:ROUTES.favorite
        },
        {
            id: 4,
            title:"السلة",
            icon:<IoCartOutline className="w-[3rem] h-[3rem] text-[#BACBD1]" />,
            components:ROUTES.cart


        },
        {
            id: 5,
            title:"الحساب",
            icon:<RiUserLine className="w-[3rem] h-[3rem] text-[#BACBD1]" />,
            components:ROUTES.account


        },
    ]
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const openToggle = () =>{
        setIsOpen(!isOpen)
    }
    const closeToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    <header className="w-full  lg:h-[6rem] flex flex-row  items-center justify-center  lg:flex md:hidden small:hidden px-8">
    <Link href="/">
    <Image
      src="/Icon.png"
      alt="Icon"
      width={160}
      height={37}
      priority
    />
    </Link>

        <div className=" flex justify-center items-center flex-row w-[30rem]  h-[3rem] rounded-full border-[0.2rem] border-[#BACBD1] relative ml-12  ">
            <div className="absolute top-1 right-4 items-center justify-center">
            <CiSearch className="w-[2rem] h-[2rem]  text-[#BACBD1]" />
            </div>
            <input
                type="text"
                className=" w-full h-full rounded-full text-right px-14 text-[1.2rem] text-black"
                placeholder="بحث"
            />
        </div>
        <div  className="w-[45rem] h-[3rem]">
          <div className="w-full h-full flex flex-row items-center justify-between ml-2">
            {categories.map((category, index) => (
              <li
                key={category.id}
                className={` list-none	
                  
                  ${index === selectedTab ? "border-b-[3px] border-[#3F6F7F]" : "text-secondary"}
                `}
                onClick={() => setSelectedTab(index)}
              >
                <Link href={category.components} className="w-[8rem] h-full flex justify-center items-center mb-1">
                <span className="text-center text-[1rem]  mr-1 text-bold text-[#3F6F7F]">{category.title}</span>
                  <span className="w-[2rem] h-[2rem] flex justify-center items-center">{category.icon}</span>
                </Link>
              </li>
            ))}
          </div>

         
        </div>
</header>

<header className="w-full h-[4rem] items-center justify-between  lg:hidden md:flex small:flex flex-row px-8">
<Link href="/">
    <Image
      src="/Icon.png"
      alt="Icon"
      width={80}
      height={30}
      priority
    />
    </Link>

    <div className=" flex justify-center items-center flex-row md:w-[15rem] small:w-[10rem]  h-[3rem] rounded-full border-[0.2rem] border-[#BACBD1] relative ml-12  ">
            <div className="absolute top-1 right-4 items-center justify-center">
            <CiSearch className="w-[2rem] h-[2rem]  text-[#BACBD1]" />
            </div>
            <input
                type="text"
                className=" w-full h-full rounded-full text-right px-14 text-[1.2rem] text-black"
                placeholder="بحث"
            />
        </div>

        {isOpen? (
            <SideBar setIsOpen={setIsOpen} categories={categories} />

        ):
        <button onClick={()=>openToggle()} className="w-[3rem] h-[3rem]"><CiMenuBurger  className="w-full h-full"/></button>
        }


</header>

</>
  )
}

export default Header
