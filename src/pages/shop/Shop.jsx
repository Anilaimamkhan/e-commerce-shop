import React, { useState } from "react";
import "./Shop.css";
import { Category } from "../../category";
import { dummydata } from "../../dummyData";
import Product from "../../component/nav/product/Product";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
const Shop = () => {
  const [cate, setCate] = useState(dummydata);

  function filterProduct(category) {
    if (category === "All") {
      setCate(dummydata);
    } else {
      let newCate = dummydata.filter((item) => item.category === category);
      setCate(newCate);
    }
  }
  return (
    <div className="shop">
      <center>
      
        <h2 className="shop_heading">
          Shop <FaShoppingBag />
        </h2>
      </center>
      <div className="category_section">
        {Category.map((item) => {
          return (
            <div
              key={item.id}
              className="category_cart"
              onClick={() => {
                filterProduct(item.name);
              }}
            >
              <img src={item.img} alt="" srcset="" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      {/* PRODUCTS */}
      {
        <div className="product-section">
          {cate.map((item) => (
            <Product
              category={item.category}
              image={item.image}
              key={item.id}
              price={item.price}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Shop;
