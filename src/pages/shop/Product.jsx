import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Product = (props) => {
    const {id, productName, price, productImage} = props.product
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className='w-[80%] md:w-[40%] lg:w-[30%] m-auto'>
            <div className='flex flex-col items-center gap-y-2 md:gap-y-3'>
                <img src={productImage} alt={productName} className='rounded-md shadow-md w-full md:w-[90%] h-[50vh] md:h-[40vh]' />
                <div className='flex flex-col items-center mt-1 md:mt-2'>
                    <h1 className='max-w-auto text-center text-base md:text-lg'><b>{productName}</b></h1>
                    <span>${price}</span>
                </div>
                <button className='text-xs md:text-sm border-[1px] border-green-900 bg-white rounded-full px-5 py-1 hover:text-white hover:bg-green-900'
                    onClick={() => addToCart(id)}>
                    Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    )
}

export default Product