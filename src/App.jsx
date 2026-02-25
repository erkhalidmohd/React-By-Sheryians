import React from 'react'
import { CART_STORAGE_KEY, getitem, setitem } from './utils/storage';
import useCart from './hooks/useCart';

const App = () => {
  setitem(CART_STORAGE_KEY, [{ id: 1, name: "Test", price: 100, qty: 2 }]);
  console.log(getitem(CART_STORAGE_KEY));
useCart()

  return (
    <div>

    </div>
  )
}

export default App