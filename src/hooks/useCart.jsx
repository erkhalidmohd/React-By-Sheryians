import React from 'react'
import { CART_STORAGE_KEY, getitem, setitem } from '../utils/storage'
import { useState } from 'react';
import { useEffect } from 'react';

const useCart = () => {
  const [cartItems, setcartItems] = useState(getitem(CART_STORAGE_KEY))
  // console.log(cartItems);

  useEffect(() => {
    setitem(CART_STORAGE_KEY, cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    setcartItems(previtem => {
      let existiing = previtem.find(item => item.id == product.id)
      if (existiing) {
        return previtem.map(item => {
          item.id === product.id ? { ...item, qty: qty + 1 } : item
        })
      }
      else {
        return [...previtem, { ...product, qty: 1 }]
      }
    })
  }

  const updateQty = (productId, delta) => {
    setcartItems(previtem => {
      let existing = previtem.find(item => item.id == productId)
      if (existing) {
        let updated = previtem.map(item => {
          if (item.id == productId) {
            let newQty = item.qty + delta
            if (newQty <= 0) {
              return null
            }
            return { ...item, qty: newQty }
          }
          return item
        })
        updated.filter(item => item.qty > 0)
      }
    })

  }
  const removeFromCart = (productId) => {
    setitem(previtem => {
      let updateCart = previtem.filter(
        item => item.id !== productId
      )
    })
  }
  return {
    cartItems,
    addToCart,
    updateQty,
    removeFromCart,
  }
}
export default useCart