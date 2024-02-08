import React from 'react'
import Image from "next/image";

const ShopAccordingToTheCharacters = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-8' >
        <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-[#04364A]'>تسوق حسب الشخصيات</h1>
        <div className='w-full h-[10rem] flex flex-between mt-4'>


            
            <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-[6rem] h-[6rem] rounded-full bg-[#BACBD1] flex justify-center items-center'>
            <Image
      src="/spiderman.png"
      alt="Icon"
      priority
      width={60}
      height={60}
    />
    
            </div>
            <h1 className='text-[1.6rem] text-[#04364A] mt-2'>Spiderman</h1>
            </div>

            
            <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-[6rem] h-[6rem] rounded-full bg-[#BACBD1] flex justify-center items-center'>
            <Image
      src="/spiderman.png"
      alt="Icon"
      priority
      width={60}
      height={60}
    />
    
            </div>
            <h1 className='text-[1.6rem] text-[#04364A] mt-2'>Spiderman</h1>
            </div>


            
        </div>
        </section>
  )
}

export default ShopAccordingToTheCharacters