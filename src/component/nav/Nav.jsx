import React from "react";
import { FaSearch, FaShopify, FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch()
 let items= useSelector((state)=>state)
 console.log(items)
  return (
    <>
      <div className="nav">
        <div className="top_nav">
          {/* logo */}
          <div className="logo">
            <Link to="/"></Link>
            <span>V-Shop</span>
            <FaShopify />
            <Link />
          </div>
          {/* sarch */}
          <form className="search_box">
            <input type="text" placeholder="search icon...." />
            {/* <button> */}
            <FaSearch />
            {/* </button> */}
          </form>
          {/* cart */}
          <Link to="./Cart">
           <div className="cart_box" >
            <FaShoppingCart />
            <span>{items.cart.length}</span>
          </div>
          </Link>
         
        </div>
        <div className="botton_nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
