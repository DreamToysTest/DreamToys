import React, { useEffect } from 'react'
import useApp from './context/useApp'
import axios from 'axios'
const DeleteProductFromFavorite = (productID) => {
    const {accessToken} = useApp()
    const DeleteProduct = (productID) => {  
        axios.delete(
            `https://aon-final.onrender.com/wishlist/delete/${productID}`,
        {
            header:{
                'Content-Type': 'application/json',
                'token' : accessToken,
            },
        }.then((response) => {
            console.log("deleted")
        })

        )
    }
   useEffect(()=>{
    axios.delete(
        {
            headers: {
              'Content-Type': 'application/json',
              'token' : accessToken,
            },
          }).then((response) => {
            console.log(response)
          })
   },[])
    return(
        <>
        <button onClick={() => DeleteProduct(productID)} className='lg:w-[12rem] lg:h-[4rem] md:w-[12rem] md:h-[4rem] small:w-[6rem] small:h-[2.6rem]   flex justify-center items-center border-[0.2rem] border-[#3F6F7F] rounded-xl'>
            <h1 className='lg:text-[1.2rem] md::text-[1.8rem] small:text-[1rem] text-[#3F6F7F]'>حذف المنتج</h1>
        </button>
        </>
    )
}

export default DeleteProductFromFavorite