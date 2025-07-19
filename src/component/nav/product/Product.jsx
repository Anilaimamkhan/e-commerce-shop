import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { AddItem } from "../../../redux/cartSlice";

const Product = ({ category, price, name, image, id }) => {
  let dispatch = useDispatch();
  // let words = name.split(" ");
  // let newWord = words.length > 10 ? words.slice(0, 10).join(" ") + "..." : name;
  let newName = name.length > 10 ? name.slice(0, 15) + "..." : name;

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_details">
        <span className="name">{newName} </span>
        <div className="category">
          <span className="price">{price}</span>
          <span className="price">{category}</span>
        </div>
        <button
          className="addToCart"
          onClick={() =>
            dispatch(
              AddItem({ name: name, image: image, price: price, id: id })
            )
          }
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default Product;
