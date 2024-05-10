import React from "react";
import { product } from "../Data";
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              // Product.js
              <div className="icons">
                <a href="/" className="fas fa-shopping-cart">
                  Shop
                </a>
                <a href="/" className="fas fa-heart">
                  Favorite
                </a>
                <a href="/" className="fas fa-eye">
                  View
                </a>
              </div>
              <div className="image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  {item.price} <span>{item.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
