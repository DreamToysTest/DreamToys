import React from 'react'
import Image from "next/image";

const ShopAccordingToTheGender = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-2'>
        <h1 className='text-[3rem] text-[#04364A]'>تسوق حسب جنس الطفل</h1>

        <div className='w-full h-full flex justify-center items-center mt-8'>
            <button className='w-[25rem] h-[28rem] relative flex items-center justify-center'>
            <Image
            className='rounded-[2rem] w-full h-full '
      src="/boy.jpg"
      alt="boy"
      width={100}
      height={100}
    />
    <h1 className='absolute bottom-0  text-[4rem] text-white'>ولد</h1>
            </button>

            <button className='w-[25rem] h-[28rem] relative flex items-center justify-center ml-48 '>
            <Image
            className='rounded-[2rem] w-full h-full '
      src="/girl.jpg"
      alt="boy"
      width={100}
      height={100}
    />
    <h1 className='absolute bottom-0  text-[4rem] text-white'>بنت</h1>
            </button>
        </div>
    </section>
  )
}

export default ShopAccordingToTheGender