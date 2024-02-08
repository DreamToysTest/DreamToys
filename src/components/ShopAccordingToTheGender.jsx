import React from 'react'
import Image from "next/image";

const ShopAccordingToTheGender = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-2'>
        <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-[#04364A]'>تسوق حسب جنس الطفل</h1>

        <div className='w-full h-full flex lg:flex-row md:flex-col small:flex-col justify-center items-center mt-8'>
            <button className='lg:w-[25rem] lg:h-[28rem] md:w-[22rem] md:h-[24rem] small:w-[18rem] small:h-[20rem] relative flex items-center justify-center'>
            <Image
            className='rounded-[2rem] w-full h-full relative  object-fill'
      src="/boy.jpg"
      alt="boy"
      fill
    />
    <h1 className='absolute bottom-0  text-[4rem] text-white'>ولد</h1>

    <div className='lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] small:w-[100px] small:h-[100px] absolute lg:-bottom-12 lg:left-[18rem] md:-bottom-12 md:left-[13rem] small:-bottom-12 small:left-[12rem]'>
<Image
    className='absolute  -rotate-[90deg]'
      src="/Rectangle.svg"
      alt="Icon"
      priority
      fill
    />
</div>

            </button>

            <button className='lg:w-[25rem] lg:h-[28rem] md:w-[22rem] md:h-[24rem] small:w-[18rem] small:h-[20rem] relative flex items-center justify-center lg:ml-48 small:mt-12 md:mt-12 '>
            <Image
            className='rounded-[2rem] w-full h-full  relative  object-fill '
      src="/girl.jpg"
      alt="boy"
      fill
    />
    <h1 className='absolute bottom-0  text-[4rem] text-white'>بنت</h1>

    <div className='lg:w-[160px] lg:h-[160px] md:w-[160px] md:h-[160px] small:w-[120px] small:h-[120px] absolute lg:-top-8 lg:left-[-4rem] md:-top-4 md:right-[0rem] small:-top-6 small:left-[-1rem] '>

<Image
    className='absolute -rotate-12'
      src="/Polygon.svg"
      alt="Icon"
      priority
      fill
    />
</div>


            </button>
        </div>
    </section>
  )
}

export default ShopAccordingToTheGender