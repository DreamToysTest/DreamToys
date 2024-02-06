import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <>
    <section className='w-full h-full flex justify-center  mx-auto' >

        <div className='w-full h-full flex flex-row justify-center items-center'>
            <div className='w-[40%] h-full flex flex-col justify-center items-center'>
                <h1 className='text-[4rem] text-[#04364A] text-center'>مكعبات بمختلف الاشكال و الاحجام قد وصلت</h1>
                <div className='w-[12rem]  h-[6rem] flex flex-row justify-center items-center'>
                    <div className='w-[20%]  h-full flex flex-col relative'>
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
                <button className='w-[80%] h-[3rem] bg-[#3F6F7F]  rounded-lg flex justify-center items-center'>
                    <span className='text-white text-[1.2rem]'>تسوق الان  </span>
                    <FaArrowRight className='text-white ml-2' />
                </button>
                </div>

            </div>

            <div className='w-[60%] h-full'>
            <Image
      src="/bannerphoto.jpg"
      alt="Icon"
      priority
      width={800}
      height={800}
    />
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeBanner