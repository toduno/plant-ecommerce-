import { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount } = useContext(ShopContext)

  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  const btnStyle = 'bg-white hover:bg-green-900 hover:text-white border border-green-800 rounded-full px-4 py-1 md:py-2 mr-2 md:mr-4 text-xs md:text-sm tracking-wide'

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='my-2 flex flex-col items-center'>
        <h1 className='py-2 text-xl md:text-2xl'><b>Your Cart Items</b></h1>

        <div className='px-8 md:px-4'>
          {Products.map(product => {
            // if (cartItems[product.id] !== 0) {
            //   return <CartItem data={product} />
            // }

            return (
              (cartItems[product.id] !== 0)
               &&
              <CartItem product={product} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} 
                updateCartItemCount={updateCartItemCount} />
            )
          })}
        </div>
      </div>

      {totalAmount > 0 ? (
        <div className='mb-5'>
          <p className='my-3 md:my-4 text-center'>Subtotal: <b>${totalAmount}</b></p>
          <button onClick={() => navigate('/')} className={btnStyle}>Continue Shopping</button>
          <button className={btnStyle}>Checkout</button>
        </div>
        ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  )
}

export default Cart