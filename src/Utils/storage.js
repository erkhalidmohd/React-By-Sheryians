export const CART_STORAGE_KEY = "v_shop_cart";
export const WISHLIST_STORAGE_KEY = "v_shop_wishlist";
export const ORDERS_STORAGE_KEY = "v_shop_orders";

export const getStorageItem = (key) => {
  try {
    if (!key) return [];
    const data = localStorage.getItem(key);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const setStorageItem = (key, value) => {
  if (!key) return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage Error :", error);
  }
};

export const calculateTotal = (cartItems) => {
    
};
