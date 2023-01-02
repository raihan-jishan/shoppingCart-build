import React from 'react';
import { Link } from 'react-router-dom';// import Link from react_router_dom..
import classes from "../styles/Navbar.module.css"; // add Navbar css module file .. 
import {AiOutlineShoppingCart as Scart} from "react-icons/ai"; // add shopping cart 

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    <div className={classes.links}>
        <Link to={'/'}>Shop</Link>
        <Link to={'/cart'}><Scart size={32}/> </Link>
    </div>
    </div>
  )
}

export default Navbar
