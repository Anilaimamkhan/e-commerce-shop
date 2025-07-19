import React from "react";
import "./Cart.css";
import CartCard from "../../component/cartCard/CartCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  let items = useSelector((item) => item);
  let total= items.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      {items.cart.length <= 0 ? (
        <div className="emptyCart">
          {" "}
          <FaShoppingCart /> <span> empty Cart</span>
        </div>
      ) : (
        <div className="cartCart_section">
          {items.cart.map((item) => (
            <CartCard
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      )}
      <div className="price_section">
        <span>Total Products : {items.cart.length}</span>
        <span>Total price : {total}</span>
      </div>
    </div>
  );
};

export default Cart;
<CartCard />;
