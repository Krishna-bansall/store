import React, { createContext, useState, useEffect } from 'react'
import { createCheckout } from '../lib/shopify'

const CartContext = createContext()

function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')


  const addToCart = async (newItem) => {
      if (cart.length) > 0
  }

  return <div>shopContext</div>
}

export default shopContext