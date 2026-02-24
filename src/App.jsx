import React from 'react'
import { CART_STORAGE_KEY, getitem, setitem } from '../../React Project Repo/React-By-Sheryians/src/utils/storage';

const App = () => {
  setitem(CART_STORAGE_KEY, [{ id: 1, name: "Test", price: 100, qty: 2 }]);
  console.log(getitem(CART_STORAGE_KEY));
  return (
    <div>App


    </div>
  )
}

export default App