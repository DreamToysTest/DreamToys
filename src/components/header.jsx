'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import SideBar from "./SideBar";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { PiCoinsLight } from "react-icons/pi";
import { HomeOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import MenuItem from "./MenuItem";
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pages = [
    { id: 1, title: "الصفحة الرئيسية", icon: <HomeOutlined style={{ fontSize: "20px" }} />, route: "/" },
    { id: 2, title: "المفضلة", icon: <HeartOutlined style={{ fontSize: "20px" }} />, route: "/favorite" },
    { id: 3, title: "السلة", icon: <ShoppingCartOutlined style={{ fontSize: "20px" }} />, route: "/cart" },
    { id: 4, title: "الحساب", icon: <UserOutlined style={{ fontSize: "20px" }} />, route: "/account" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = (id) => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Header */}
      <div className="sticky top-0 z-50 bg-white w-full">
        <header className="w-full lg:h-[6rem] flex items-center justify-center lg:flex md:hidden small:hidden px-8 ">
          <Link href="/">
            <Image
              src="/Icon.png"
              alt="Icon"
              width={160}
              height={37}
              priority
            />
          </Link>

          <div className="flex justify-center items-center flex-row w-[50%] h-[3rem] rounded-full border-[0.2rem] border-[#BACBD1] relative">
            <div className="absolute top-1 right-4 items-center justify-center">
              <CiSearch className="w-[2rem] h-[2rem] text-[#BACBD1]" />
            </div>
            <input
              type="text"
              className="w-full h-full rounded-full text-right px-14 text-[1.2rem] text-black"
              placeholder="بحث"
            />
          </div>

          <div className="w-[5rem] h-[3rem] justify-center items-center flex">
            <PiCoinsLight className="w-[2.5rem] h-[2.5rem] fill-yellow-400" />
            <h1 className="text-[1.4rem] ml-1 text-[#3F6F7F]">0</h1>
          </div>

          <div className="w-[50%] h-[3rem]">
            <div className="w-full h-full flex flex-row items-center justify-between ml-2">
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  page={page}
                  pathname={pathname}
                  handlePageChange={handlePageChange}
                  isSidebar={false}
                />
              ))}
            </div>
          </div>
        </header>

        <div className="border-b-[0.1rem] border-[#BACBD1] w-full"></div>

        {/* Mobile Header */}
        <header className="w-full h-[4rem] items-center justify-between lg:hidden md:flex small:flex flex-col lg:px-8 md:px-0 small:px-0">
          <div className="w-full h-full flex items-center justify-between">
            <div className="md:w-[100px] md:h-full small:w-[100px] small:h-full  relative">
              <Link href="/">
                <Image src="/Icon.png" alt="Icon" fill priority />
              </Link>
            </div>

            <div className="flex justify-center items-center flex-row md:w-[50%] small:w-[50%] h-[3rem] rounded-full border-[0.2rem] border-[#BACBD1] relative md:ml-12 small:ml-2">
              <div className="absolute top-2 right-4 items-center justify-between">
                <CiSearch className="w-[1.5rem] h-[1.5rem] text-[#BACBD1]" />
              </div>
              <input
                type="text"
                className="w-full h-full rounded-full text-right px-10 text-[1.2rem] text-black placeholder:text-[1rem] placeholder:mr-[0rem]"
                placeholder="بحث"

              />
            </div>

 

            {isOpen ? (
              <SideBar setIsOpen={setIsOpen} pages={pages} pathname={pathname} handlePageChange={handlePageChange}/>
            ) : (
              <>
              <div className='w-[5rem] h-full flex flex-row justify-center items-center'>
              <div className="w-[3rem] h-[2rem]  justify-center items-center flex">
              <PiCoinsLight className="w-[1.5rem] h-[1.5rem] fill-yellow-400" />
              <h1 className="text-[1rem] ml-1 text-[#3F6F7F]">0</h1>
            </div>
              <button onClick={toggleSidebar} className="lg:w-[3rem] lg:h-[3rem] md:w-[3rem] md:h-[3rem] small:w-[2rem] small:h-[2rem]">
                <CiMenuBurger className="w-full h-full" />

              </button>
              </div>


              </>
            )}
          </div>
          <div className="border-b-[0.1rem] border-[#BACBD1] w-full"></div>
        </header>
      </div>
    </>
  );
};

export default Header;
