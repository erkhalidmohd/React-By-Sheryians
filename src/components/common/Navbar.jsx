import React from "react";
import { calculateTotal } from "../../utils/storage";
import useCart from "../../hooks/useCart";


const Navbar = () => {
    const { cartItems } = useCart();
    const { totalitem } = calculateTotal(cartItems);
    console.log(totalitem);


    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">

            {/* Logo */}
            <h2 className="text-2xl font-bold tracking-wide">
                V-Shop
            </h2>

            {/* Cart Section */}
            <div className="relative flex items-center gap-2 cursor-pointer">
                <span className="text-lg">🛒 Cart</span>

                {/* Badge */}
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {totalitem}
                </span>
            </div>

        </nav>
    );
};

export default Navbar;