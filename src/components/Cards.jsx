import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CiShare2, CiHeart } from 'react-icons/ci';
import useApp from './context/useApp';
import DeleteProductFromCart from './DeleteProductFromCart';
import LoginForm, { openModal } from './LoginForm';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";

const Cards = ({ product }) => {
  const { accessToken, userInfo } = useApp();
  const [quantity, setQuantity] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const AddToCart = (product) => {
    // Your Add to Cart Logic
  };

  const addToFavorite = async (product) => {
    try {
      const response = await axios.post(
        "https://aon-final.onrender.com/wishlist/add",
        {
          productId: product.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'token': accessToken
          },
        }
      );
      console.log(response);
      // Refresh favorite products after adding to the wishlist
      fetchFavoriteProducts();
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };


  const removeFromFavorite = async (product) => {
    try {
      const response = await axios.delete(
        `https://aon-final.onrender.com/wishlist/delete/${product.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'token': accessToken
          },
        }
      );
      console.log(response);
      // Refresh favorite products after adding to the wishlist
      removeFromFavorite();
    } catch (error) {
      console.error('Error removing to favorites:', error);
    }
  };

  const fetchFavoriteProducts = async () => {
    try {
      const response = await axios.get(
        "https://aon-final.onrender.com/wishList/userView",
        {
          headers: {
            'Content-Type': 'application/json',
            'token': accessToken,
          },
        }
      );
      setFavoriteProducts(response.data.wishlist);
    } catch (error) {
      console.error('Error fetching favorite products:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteProducts();
  }, []);
  console.log(favoriteProducts)
  console.log(product)

  return (
    <div className='w-[16rem] h-[22rem] p-2 flex flex-col border-[0.1rem] border-[#BACBD1] rounded-xl'>
      <div className='w-full h-[60%] relative'>
        <Image
          className='rounded-lg object-cover'
          src={product.image}
          alt='Icon'
          priority
          fill
        />
        <div className='w-full h-[3rem] top-0 absolute flex justify-between px-2'>
          <button className='w-[1.5rem] h-[1.5rem] cursor-pointer'>
            <CiShare2 className='w-full h-full text-[#133e4d]' />
          </button>
          {favoriteProducts.find((favProduct) => favProduct.id === product.id) ? (
  <button
    onClick={() => removeFromFavorite(product)}
    className='w-[1.5rem] h-[1.5rem]'
  >
    <FaHeart className='w-full h-full text-red-800' />
  </button>
) : (
  <button
    onClick={() => addToFavorite(product)}
    className='w-[1.5rem] h-[1.5rem]'
  >
    <CiHeart className={`w-full h-full`} /> 
  </button>
)}

        </div>
      </div>
      <p className='text-right text-xl'>{product.title}</p>
      <p className='text-right text-base'>{product.price} د.ع.</p>
      <button
        onClick={() => AddToCart(product)}
        className='w-full h-[2.5rem] rounded-lg bg-[#3F6F7F] text-white flex justify-center items-center mt-auto'
      >
        اضف للسلة
      </button>
    </div>
  );
};

export default Cards;
