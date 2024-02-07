import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CiShare2, CiHeart } from 'react-icons/ci';
import useApp from './context/useApp';
import DeleteProductFromCart from './DeleteProductFromCart';
import LoginForm, {openModal} from './LoginForm';

const Cards = ({ product }) => {
  const { CartProducts, setCartProducts } = useApp();
  const [quantity, setQuantity] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);



  // useEffect(() => {
  //   const cartProductsFromStorage = localStorage.getItem('cartProducts');
  //   if (cartProductsFromStorage) {
  //     setCartProducts(JSON.parse(cartProductsFromStorage));
  //   }
  // }, []);

  // const AddToCart = (product) => {
  //   const productWithQuantity = { ...product, quantity };
  //   setCartProducts((prevCartProducts) => [...prevCartProducts, productWithQuantity]);

  //   localStorage.setItem('cartProducts', JSON.stringify([...CartProducts, productWithQuantity]));
  // };

  const isInCart = CartProducts.some((item) => item.id === product.id);



  return (
    <div className='w-[16rem] h-[22rem] p-2 flex flex-col border-[0.1rem] border-[#BACBD1] rounded-lg'>
      <div className='w-full h-[60%] relative'>
        <Image
          className='w-full h-full rounded-lg'
          src={product.image}
          alt='Icon'
          priority
          width={60}
          height={60}
        />
        <div className='w-full h-[3rem] top-0 absolute flex justify-between px-2'>
          <button className='w-[1.5rem] h-[1.5rem]'>
            <CiShare2 className='w-full h-full text-[#133e4d]' />
          </button>
          <button className='w-[1.5rem] h-[1.5rem]'>
            <CiHeart className='w-full h-full text-[#1c4a5a]' />
          </button>
        </div>
      </div>
      <h1 className='text-right text-[1.2rem]'>{product.title}</h1>
      <h1 className='text-right text-[1.2rem]'>{product.irice}</h1>
      {isInCart ? (
        <DeleteProductFromCart productID={product.id} />
      ) : (
        <button

          className='w-full h-[2.5rem] rounded-lg bg-[#3F6F7F] text-white flex justify-center items-center mt-auto'
        >
          اضف للسلة
        </button>
      )}
    </div>
  );
};

export default Cards;
