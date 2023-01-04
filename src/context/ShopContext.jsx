//Creating a state where one can access and change the state in the shop and also cart components 
//using context

import React, { createContext, useState } from 'react'
import { Products } from '../products'

//CONTEXT API - to manage and keep track of states and functions globally in a store

//CONTEXT
//creates a store to keep track of states and functions that needs to be accessed everywhere in the project
//rather than managing states manually or locally. 
export const ShopContext = createContext()

//gets the cart items dynamically by it's id. i = 1 and i < Products.length + 1 since the first cart item's
//id starts with 1
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

//CONTEXT PROVIDER
//defines the state and everything related to the logic in this project 
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())  

  const addToCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(prev => ({...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find(product => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
