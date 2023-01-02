import React from "react";
import { PRODUCTS } from "../../Product"; //products data _- 
import Product from "./Product"; // import Product  
import classes from "../../styles/ProductPage.module.css";
import styles from "../../styles/gridList.module.css";
import {BsShop} from "react-icons/bs";
import {AiOutlineArrowDown} from "react-icons/ai";
import Title from "../../components/Title";
export const Shop = () => {
  return(
   
    <main className={classes.main}> 
     
      <Title>
    Tech Shop <BsShop /> <span>tech products <AiOutlineArrowDown /></span> 
      </Title>

    <div className={classes.container}>
    <div className={styles.ProductCategory}>
    {PRODUCTS.map((proucts) => (
     <Product data={proucts}/> // product also render over there 
    ))}
    </div>
   
    </div>
   </main> 
   
  )
}