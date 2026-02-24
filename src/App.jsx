import React from 'react'
import { setStorageItem,CART_STORAGE_KEY, getStorageItem } from './Utils/storage'


const App = () => {
  let data = [1, 2, 4, 5, 6,]

 const val = getStorageItem(CART_STORAGE_KEY, data)
 console.log(val)

  return (
    <div>App

      
    </div>
  )
}

export default App