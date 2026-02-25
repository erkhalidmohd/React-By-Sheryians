export const CART_STORAGE_KEY = "v_shop_cart";
export const WISHLIST_STORAGE_KEY = "v_shop_wishlist";
export const ORDERS_STORAGE_KEY = "v_shop_orders";

export const getItem = (key) => {
  try {
    if (!key) return [];
    const data = localStorage.getItem(key);
    if (!data) return [];
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const setItem = (key, value) => {
  if (!key ) return;
  try {
     localStorage.setItem(key, JSON.stringify(value));
    // console.log(data);
  } catch (error) {
    console.error("Storage Error :", error);
  }
};

export const calculateTotal = (cartItems) => {
  let totalPrice = 0;
  let totalitem = 0;
  cartItems.map((item) => {
    totalPrice += item.price * item.qty;
    totalitem += item.qty;
  });
  return {
    totalPrice,
    totalitem,
  };
};







