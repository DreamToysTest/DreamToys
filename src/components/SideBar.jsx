import React from 'react';
import { IoMdClose } from "react-icons/io";
import MenuItem from "./MenuItem";

const SideBar = ({ setIsOpen, pages, selectedPage, handlePageChange }) => {
  return (
    <div className="top-0 left-0 fixed w-full h-full overflow-hidden flex flex-col justify-end items-end bg-primary-500 px-[2rem] py-[1rem] left-0 z-10">
      <button onClick={() => setIsOpen(false)} className="w-[3rem] h-[3rem] mb-[5rem]"><IoMdClose className="w-full h-full text-white" /></button>
      <div className='w-full h-full flex flex-col items-end space-y-4'>
        {pages.map((page, index) => (
          <MenuItem
            key={index}
            page={page}
            isSelected={selectedPage === page.id}
            handlePageChange={handlePageChange}
            isSidebar={true} 
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
