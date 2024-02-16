'use client'
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Cards from "./Cards";
function Arrow({ disabled, onClick, children }) {
    return (
      <div
        className={`arrow ${disabled ? 'disabled' : ''}`}
        onClick={() => onClick()}
      >
        {children}
      </div>
    );
  }

// Add the LeftArrow and RightArrow components
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <BsChevronLeft className="w-[50px] h-[30px] text-accent" />
      </Arrow>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <BsChevronRight  className="w-[50px] h-[30px] text-accent" />
      </Arrow>
    );
  }
  
  // Create a separate component for the task button
  function TaskCategoryButton({ id, name, isSelected, onClick }) {
    return (
      <div
        className="p-2 h-full text-center md:w-[12rem] small:w-[10rem] flex flex-col justify-center items-center  ml-3  "
      >
        <div className="small:h-[8rem] small:w-[8rem] md:h-[8rem] md:w-[8rem] bg-black rounded-full relative ">
        <Image
        className="w-full h-full object-fill rounded-full"
                  src="/boy.jpg"
                  alt="Icon"
                  priority
                  fill
                />
        </div>
        <h1 className="text-[1rem] lg:text-[2rem]">{name}</h1>

      </div>
    );
  }


function TaskProductButton({ product }) {
    return (
      <div
        className="p-2 h-full text-center md:w-[16rem] small:w-[20rem]  ml-3 "
      >
        <Cards product={product} />

      </div>
    );
  }

  export {TaskCategoryButton,TaskProductButton}