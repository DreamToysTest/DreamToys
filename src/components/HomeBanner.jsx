import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <>
    <section className='w-full h-full flex justify-center  mx-auto' >

        <div className='w-full h-full flex lg:flex-row md:flex-col-reverse small:flex-col-reverse	 justify-center items-center'>
            <div className='lg:w-[40%] md:w-[70%] small:w-[75%] h-full flex flex-col justify-center items-center'>
                <h1 className='lg:text-[4rem] md:text-[3.5rem] small:text-[2rem] text-[#04364A] text-center'>مكعبات بمختلف الاشكال و الاحجام قد وصلت</h1>
                <div className='lg:w-[12rem] md:w-[12rem] small:w-[12rem] lg:h-[6rem] md:h-[8rem] small:h-[6rem] flex flex-row justify-center items-center'>
                    <div className='w-[20%]  h-full flex  flex-col relative '>
                    <Image
                    className='absolute right-3 top-0 '
      src="/star1.png"
      alt="Icon"
      priority
      width={30}
      height={30}
    />
    
                        <Image
      src="/star2.png"
      className='absolute right-8 top-9'

      alt="Icon"
      priority
      width={30}
      height={30}
    />
                        <Image
      src="/star3.png"
      className='absolute right-2 bottom-0'

      alt="Icon"
      priority
      width={30}
      height={30}
    />
                    </div>
                <button className='w-[80%] lg:h-[3rem] md:h-[4rem] small:h-[3.5rem] bg-[#3F6F7F] rounded-lg flex justify-center items-center'>
                    <span className='text-white text-[1.2rem]'>تسوق الان  </span>
                    <FaArrowRight className='text-white ml-2' />
                </button>
                </div>

            </div>

            <div className='lg:w-[60%] md:w-full small:w-full h-full relative'>
            <Image
      src="/bannerphoto.jpg"
      alt="Icon"
      priority
      width={800}
      height={800}
    />

<div className='lg:w-[120px] lg:h-[120px] md:w-[160px] md:h-[160px] small:w-[100px] small:h-[100px] absolute lg:top-0 lg:left-[-3rem] md:-top-4 md:right-[1rem] small:-top-4 small:right-[1rem] '>

<Image
    className='absolute -rotate-12'
      src="/Polygon.svg"
      alt="Icon"
      priority
      fill
    />
</div>


<div className='lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] small:w-[130px] small:h-[130px] absolute lg:-bottom-12 lg:left-[-3rem] md:-bottom-12 md:left-[-6rem] small:-bottom-12 small:left-[-3rem]'>
<Image
    className='absolute  -rotate-[30deg]'
      src="/Rectangle.svg"
      alt="Icon"
      priority
      fill
    />
</div>


    
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeBanner