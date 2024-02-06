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
        <button onClick={() => DeleteProduct(productID)} className='w-[12rem] h-[4rem] flex justify-center items-center border-[0.2rem] border-[#3F6F7F]'>
            <h1 className='text-[2rem] text-[#3F6F7F]'>حذف المنتج</h1>
        </button>
        </>
    )
}

export default DeleteProductFromCart