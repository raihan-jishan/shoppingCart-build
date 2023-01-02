import React, { useContext } from 'react';
import { ShopContex } from "../../context/Shop_Contex";
import classes from "../../styles/gridList.module.css"; // module css file 
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsCurrencyDollar} from "react-icons/bs";
const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart , cartItems} = useContext(ShopContex);
  //   cart Item Amount function 
  const CartItemAmount = cartItems[id];

  return (
       
   
    
      <div className={classes.productsCollection}> 
        <img src={productImage} alt="404 there was server side error" />
        
        <div className={classes.description}>
    <p className={classes.productName}>{productName}</p>
    <p className={classes.price}><BsCurrencyDollar />{price}</p>
        </div>
        <button className={classes.addToCartBttn} onClick={() => addToCart(id)}><AiOutlineShoppingCart size={22} className={classes.ShopingIcon}/>Add to    Cart   {CartItemAmount > 0 && 
          <>({CartItemAmount}) </>}

        </button>
        </div>

 
   

    
     
  )
}

export default Product
