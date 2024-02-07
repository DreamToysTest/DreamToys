import React from 'react'
import useApp from './context/useApp'
const DeleteProductFromCart = (productID) => {
    const { CartProducts, setCartProducts } = useApp();
    const DeleteProduct = (productID) => {
        console.log("dfeleted me")
        console.log(productID)
        const updatedProduct = CartProducts.filter((product) => product.id !== productID.productID)
        console.log(updatedProduct,"updatedproducts")
        setCartProducts(updatedProduct)
        localStorage.setItem('cartProducts', JSON.stringify(updatedProduct))
    }
    return(
        <>
        <button onClick={() => DeleteProduct(productID)} className='lg:w-[12rem] lg:h-[4rem] md:w-[12rem] md:h-[4rem] small:w-[6rem] small:h-[2.6rem]   flex justify-center items-center border-[0.2rem] border-[#3F6F7F] rounded-xl'>
            <h1 className='lg:text-[1.2rem] md::text-[1.8rem] small:text-[1rem] text-[#3F6F7F]'>حذف المنتج</h1>
        </button>
        </>
    )
}

export default DeleteProductFromCart