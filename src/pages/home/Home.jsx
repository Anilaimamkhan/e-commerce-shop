import React, { useState } from "react";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { Category } from "../../category";
import Product from "../../component/nav/product/Product";
// import { BsDatabase } from "react-icons/bs";
import { dummydata } from "../../dummyData";

const Home = () => {
  const [cate, setCate] = useState(dummydata);
  function filterProduct(category) {
    let updateData = dummydata.filter((item) => item.category === category);
    setCate(updateData);
  }
  return (
    <>
      <div className="home">
        <div className="hero_bg">
          <img src={bg} alt="" srcset="" />
        </div>
        <div className="category_section">
          {Category.slice(1).map((item) => {
            return (
              <div
                key={item.id}
                className="category_cart"
                onClick={() => {
                  filterProduct(item.name);
                }}
              >
                <img src={item.img} alt="" srcset="" />
                <span>
                  {item.name.length > 10
                    ? item.name.slice(0,5) + "..."
                    : item.name}
                </span>
              </div>
            );
          })}
        </div>
        {/* PRODUCT SECTION */}
        <h1 className="product_heading">Trending Products</h1>
        <div className="product-section">
          {cate.slice(0, 7).map((item) => (
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
      </div>
    </>
  );
};

export default Home;
