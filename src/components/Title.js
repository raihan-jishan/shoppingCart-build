import React from 'react'
import classes from "../styles/ProductPage.module.css";
const Title = ({children}) => {
  return (
    <div>
        <div className={classes.ShopTitle}>
        <h1>{children}</h1>
         
      </div>
    </div>
  )
}

export default Title
