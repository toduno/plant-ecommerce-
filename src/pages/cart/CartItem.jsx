const CartItem = (props) => {
    const { id, productName, price, productImage } = props.product
    const { cartItems,  addToCart, removeFromCart, updateCartItemCount } = props

    const btnInputStyle = 'border-[1px] border-black px-1 bg-white'

    return (
        <div className="px-5 md:px-20 py-4 md:py-6 mt-4 md:mt-6 shadow-md rounded-md flex flex-col md:flex-row items-center justify-evenly gap-y-3 gap-x-4 mb-2 md:mb-4">
            <div className="w-[73vw] md:w-[30vw] flex justify-center">
                {/* <img src={productImage} alt={productName} className='rounded-md shadow-md w-full h-[30vh] md:h-[35vh]'/> */}
            
                <img src={productImage} alt={productName} className='rounded-md shadow-md w-full h-[45vh] md:h-[30vh]'/>
            </div>

            <div className="flex flex-col items-center md:gap-y-4  min-w-[50%]">
                <p className="text-base md:text-lg"><b>{productName}</b></p>
                <p>Price: ${price}</p>
            </div>

            <div className="flex justify-center items-center w-14">
                <button onClick={() => removeFromCart(id)} className={btnInputStyle}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} 
                    className='w-[35px] text-center border-[1px] border-black focus:outline-0 px-1'/>
                <button onClick={() => addToCart(id)} className={btnInputStyle}>+</button>
            </div>
        </div>
    )
}

export default CartItem