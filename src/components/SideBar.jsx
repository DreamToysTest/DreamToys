import React from 'react'
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
const SideBar = ({setIsOpen,categories}) => {
  return (
    <div
        className="sidebar-container fixed w-full h-full overflow-hidden flex flex-col justify-end items-end   bg-[#3F6F7F]  px-[2rem] py-[1rem] left-0 z-10"
        style={{
          opacity: `${"1"}`,
          top: ` ${"0"}`,
        }}
      >

<button onClick={()=>setIsOpen(false)} className="w-[3rem] h-[3rem]  "><IoMdClose className="w-full h-full text-white" /></button>
<div className='w-full h-full flex flex-col  '>
{categories.map((category, index) => (
                <Link href={category.components} className="w-full h-[2rem] my-8 flex justify-end items-end ">
                <span className="text-center text-[1.2rem]  mr-1 text-bold text-white">{category.title}</span>
                  <span className="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white">{category.icon}</span>
                </Link>
            ))}
</div>

      </div>
  )
}

export default SideBar