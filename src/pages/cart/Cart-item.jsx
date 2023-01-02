import React, { useContext } from 'react';
import {FaDollarSign} from "react-icons/fa"; // dollar icon from react icons
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";// +  / - icon 
import classes from "../../styles/cart.module.css";
import {ShopContex} from "../../context/Shop_Contex";
export  const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContex);

  return (
    <div className={classes.cartItem}>
      <img src={productImage} alt="404 there was server side error!" />
      <div className={classes.description}>
            <p className='productName'>{productName}</p>
            <p><FaDollarSign /> {price}</p>
            {/* /countHandler */}
            <div className='countHandler'>
              <button onClick={() => removeFromCart(id)}><AiOutlineMinus /></button>
              <input  value={cartItems[id]}
                onChange={(e) => 
                updateCartItemCount(Number(e.target.value), id)
                }/>
              <button onClick={() => addToCart(id)}><AiOutlinePlus/></button>
            </div>
      </div>
    </div>
  )
}
