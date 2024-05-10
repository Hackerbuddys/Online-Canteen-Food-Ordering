import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

const Navbar = () => {
  const cartRef = useRef(null);
  const searchRef = useRef(null);
  const navbarRef = useRef(null);

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#review" className="nav-link">
            Review
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#blogs" className="nav-link">
            Blogs
          </a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item">
              <span className="fas fa-times" key={index}></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
              {/* <div className="quantity">
                <a href="#" className="btn">+</a> 
                <div>{item.count}</div>
                <a href="#" className="btn">-</a>
             </div> */}
            </div>
          ))}
          <a href="/home" className="btn">
            Checkout Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
