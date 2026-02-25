import React from 'react'
import { CART_STORAGE_KEY, getitem, setitem } from '../utils/storage'
import { useState } from 'react';

const useCart = () => {
  const [caritem, setcaritem] = useState(getitem(CART_STORAGE_KEY))
  console.log(caritem);

  const addToCart = (product) => {
    setcaritem(previtem => {
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
  const removeFromCart = (productId) => {
    setitem(previtem => {
      let updateCart = previtem.filter(
        item => item.id !== productId
      )
    })
  }
  return (



    <div>

    </div>
  )
}

export default useCart