import React, { useContext } from 'react';
import {PRODUCTS} from "../../Product";// product data
import {ShopContex} from "../../context/Shop_Contex";
import {CartItem} from "./Cart-item";
import classes from "../../styles/cart.module.css";
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContex);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return  (  
    <div className={classes.cart}>
      <div><h1>Your Cart Items</h1></div>

      <div className={classes.cart}>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} /> 
          }
 })}
      </div>
      {/*  totalAmount f`unction */}
      {totalAmount > 0 ? (
        <div className={classes.checkout}>
          <p>SubTotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => {
            checkout();
            navigate("/checkout")
          }}>
            checkout
          </button>
          </div>
      ) : (
        <h1>Your Shopping Cart Is Empty</h1>
           
      )}
      </div>
  )
      }

 
