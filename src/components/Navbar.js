import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <nav className="navbar" ref={navbarRef}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/product" className="nav-link">Products</Link>
        <Link to="/review" className="nav-link">Review</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/blog" className="nav-link">Blogs</Link>

        {/* Contact dropdown */}
        <div className="dropdown">
          <span>Policies</span>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Cancellations & Refunds</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </nav>

      <div className="icons">
        <div className="fas fa-search" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
        <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
      </div>

      <div className="search-form" ref={searchRef}>
        <input type="search" placeholder="Search here..." id="search-box" />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className="cart-items-container" ref={cartRef}>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span className="fas fa-times"></span>
            <img src={item.img} alt="" />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
        <Link to="/checkout" className="btn">Checkout Now</Link>
      </div>
    </header>
  );
};

export default Navbar;
