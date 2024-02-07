'use client'
import React, {useEffect, useState} from 'react'
import useApp from './context/useApp';
import Image from 'next/image';
const Checkout = () => {
  const { CartProducts, setCartProducts } = useApp();
  const [totalProductPrice, setTotalProductPrice] = useState(0)
  const [deliveCost, setDeliverCost] = useState(5000)
  const [totalPriceCost, setTotalPriceCost] = useState(0)
  useEffect(() => {
      const cartProductsFromStorage = localStorage.getItem('cartProducts');
      if (cartProductsFromStorage) {
          setCartProducts(JSON.parse(cartProductsFromStorage));
      }
  }, [])


  useEffect(() => {
      const totalPrice = CartProducts.reduce((acc, product) => {
          return acc + (product.price * product.quantity);
      }, 0);
      setTotalProductPrice(totalPrice);
      setTotalPriceCost(totalPrice + deliveCost)
  }, [CartProducts]);
  return (
    <main className='h-full flex w-full  flex-col  mt-5   items-center'>
        <h1 className='text-[3rem] text-[#04364A] mb-8'>اكمال الطلب</h1>
        <div className='w-full h-full flex lg:flex-row  md:flex-col-reverse small:flex-col-reverse justify-center '>

        <div className='  h-full lg:w-[40rem] md:w-full small:w-full  flex flex-col  justify-center items-center  md:px-2 small:px-2'>

          <div className='h-full w-[60%] flex justify-center items-center flex-col  '>

            <div className='w-full h-full flex flex-row justify-between items-center'>
              <h1 className='text-[1.6rem] text-[#04364A]'>{totalProductPrice}</h1>
              <h1 className='text-[1.6rem] text-[#04364A]'>المجموع</h1>

            </div>

            <div className='w-full h-full flex flex-row justify-between items-center my-4'>
              <h1 className='text-[1.6rem] text-[#04364A] font-medium'>{deliveCost}</h1>
              <h1 className='text-[1.6rem] text-[#04364A]'>التوصيل</h1>

            </div>

            <div className='w-full h-full flex flex-row justify-between items-center '>
              <h1 className='text-[1.6rem] text-[#04364A]  font-medium'>{totalPriceCost}</h1>
              <h1 className='text-[1.6rem] text-[#04364A]  font-medium'>المجموع</h1>

            </div>

          </div>

          <div className=' w-full border-b-[0.3rem] border-[#7C9DA8] mt-6'></div>

          <div className='w-full h-full flex flex-col '>
            <h1 className='text-[2rem] text-[#04364A]  text-right my-4'>طرق الدفع</h1>

            <div className='w-full h-full flex flex-col justify-center items-center'>
              <button className='w-full h-[4rem] border-[0.2rem] border-[#3F6F7F] rounded-lg flex justify-center items-center'>
                <h1 className='text-[1.6rem] text-[#3F6F7F]'> نقدا</h1>
              </button>

              <button className='w-full h-[4rem] border-[0.2rem] border-[#3F6F7F] rounded-lg flex justify-center items-center my-6'>
                <h1 className='text-[1.6rem] text-[#3F6F7F]'> زين كاش</h1>
              </button>

              <button className='w-full h-[4rem] border-[0.2rem] border-[#3F6F7F] rounded-lg flex justify-center items-center'>
                <h1 className='text-[1.6rem] text-[#3F6F7F]'>ماستر كارد</h1>
              </button>
            </div>

            <div className=' w-full border-b-[0.3rem] border-[#7C9DA8] my-6'></div>
            
            <button className='w-full h-[4rem] bg-[#3F6F7F] rounded-lg flex justify-center items-center '>
                <h1 className='text-[1.6rem] text-white'>اكمال الطلب</h1>
              </button>

          </div>


        </div>

        <div className=' h-full w-[40rem] md:w-full small:w-full  lg:ml-12 flex flex-col justify-center items-center px-2 '>
          {CartProducts?.length > 0 && (
            CartProducts?.map((product) => (
              <div className='w-full h-[10rem]   mb-4 flex flex-row justify-end p-2 border-[0.2rem] border-[#BACBD1] rounded-xl'>


                <div className='w-full h-full flex flex-col  items-end mr-6'>
                  <h1 className='lg:text-[1.5rem] md:text-[1.2rem] small:text-[1rem] text-[#04364A] font-medium'>{product.title}</h1>
                  <h1 className='lg:text-[1.4rem] md:text-[1.1rem]  small:text-[1rem] mt-4'>{product.price}</h1>
                </div>


                <div className='w-[12rem]  h-full relative'>
                <Image
    className='w-full h-full rounded-lg object-fill'
      src={product.image}
      alt="Icon"
      priority
fill
    />
                </div>

              </div>
            ))
          )}
        </div>
        </div>


    </main>
  )
}

export default Checkout