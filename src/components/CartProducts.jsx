'use client'
import React, {useState, useEffect} from 'react'
import Image from "next/image";
import Link from 'next/link';
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import useApp from './context/useApp';
import { GoPlus } from "react-icons/go";
import { GoMinus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import DeleteProductFromCart from './DeleteProductFromCart';
const CartProducts = () => {
    const { CartProducts, setCartProducts } = useApp();

    useEffect(() => {
        const cartProductsFromStorage = localStorage.getItem('cartProducts');
        if (cartProductsFromStorage) {
            setCartProducts(JSON.parse(cartProductsFromStorage));
        }
    }, [])
    const AddQuantity = (productID) => {
        const updatedProducts = CartProducts.map((product) => {
            if (product.id === productID) {
                return { ...product, quantity: product.quantity + 1 }
            }
            return product
        })
        setCartProducts(updatedProducts)
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts))
    }

    const subtractQuantity = (productID) => {
        const updatedProducts = CartProducts.map((product) => {
            if (product.id === productID) {
                return {...product, quantity: product.quantity - 1}
            }
            return product
        })
        setCartProducts(updatedProducts)
        localStorage.setItem('setProducts', JSON.stringify(updatedProducts))

    }

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const totalPrice = CartProducts.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        setTotalPrice(totalPrice);
    }, [CartProducts]);
  return (
    <main className='w-full h-full flex flex-col justify-center items-center  mx-auto'>

        <h1 className='text-[3rem] text-[#04364A]'>السلة</h1>
        <div className='w-[45rem] h-ful flex flex-col justify-center items-center'>
        {CartProducts?.length > 0 && (
            CartProducts?.map((product) => (
                <div className='w-full h-[15rem] border-[0.2rem] border-[#BACBD1] my-4 flex flex-row justify-betwen px-2 py-2 rounded-xl'>

                <div className='w-[40%] h-full flex flex-row items-center justify-center'>

                    <div className='w-[50%] h-full flex justify-center items-end mb-12 '>
                        <DeleteProductFromCart productID={product.id} />
                    </div>

                    <div className='w-[50%] h-full flex justify-center items-end mb-12 ml-2'>
                        <button onClick={() => AddQuantity(product.id)} className='w-[2rem] h-[2rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center mr-2'><GoPlus className='w-[2rem] h-[2rem] text-white' /></button>
                        <h1 className='text-center text-[1.4rem]'>{product.quantity}</h1>
                        <button onClick={() => subtractQuantity(product.id)} className='w-[2rem] h-[2rem] rounded-lg bg-[#3F6F7F] flex justify-center items-center ml-2'><BiMinus className='w-[2rem] h-[2rem] text-white' /></button>

                        </div>
                </div>
    

    <div className='w-[60%]  h-full flex flex-row items-center'>
            <div className='w-[50%]  h-full flex flex-col items-center'>
                <h1 className='text-[1.2rem]'>{product.title}</h1>
                <h1 className='text-[1.2rem] mt-4'> {product.price * product.quantity}</h1>
        
            </div>
        
            <div className='w-[50%] h-full  relative'>
            <Image
            className='w-full h-full rounded-lg '
            src={product.image}
              alt="Icon"
              priority
fill
            />
            <div className='w-full h-[3rem] top-0 absolute flex justify-between px-2'>
        
            <button className='w-[1.5rem] h-[1.5rem]' ><CiShare2 className='w-full h-full text-[#133e4d]' /></button>
            <button className='w-[1.5rem] h-[1.5rem]' ><CiHeart className='w-full h-full text-[#1c4a5a]' /></button>
        
            </div>
        
            </div>
    </div>
    
    
    
    
                </div>
            ))
        )}

        <div className='w-full h-[18rem] flex flex-col py-8'>

            <div className='w-full h-full flex flex-row'>


                <div className='w-[50%] h-full flex justify-end'>
                    <h1 className='text-[1.6rem] text-[#04364A] font-medium'>{totalPrice}</h1>
                </div>

                <div className='w-[50%] h-full flex justify-end'>
                    <h1 className='text-[1.6rem] text-[#04364A] font-medium'>المجموع</h1>
                </div>


                </div> 

                <Link href="/cart/checkout" className='w-full h-[5rem] flex justify-center items-center bg-[#3F6F7F] text-white text-[1.6rem] rounded-lg'> الدفع </Link>

        </div>
        </div>
    </main>
  )
}

export default CartProducts