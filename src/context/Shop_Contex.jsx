import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Product";
export const ShopContex = createContext(null);
//  GetdefaultCart function
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Shop_ContexProvider function
export const ShopContexProvider = (props) => {
  //  start creating state
  const [cartItems, setCartItem] = useState(getDefaultCart);
    //  Get total Cart Amount function 
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo  = PRODUCTS.find((product) => product.id === Number (item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        //  return something 
        return totalAmount;
    }


  //  Add to cart function //
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //     Remove from Cart function
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //   Update UpdateCartItemCount function 
  const UpdateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({...prev, [itemId]:newAmount
    }))
  }
//    checkout
const checkout = () => {
    setCartItem(getDefaultCart())
}
  //     contexValue
  const contexValue = { cartItems, addToCart, removeFromCart, UpdateCartItemCount, getTotalCartAmount, checkout };

//      Test
//   console.log(cartItems);
  return (
    <ShopContex.Provider value={contexValue}>
      {props.children}
    </ShopContex.Provider>
  );
};
