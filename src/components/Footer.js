import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="share">
        <a
          href="https://www.facebook.com/"
          className="fab fa-facebook-f"
          aria-label="Facebook"
        ></a>
        <a
          href="https://twitter.com/"
          className="fab fa-twitter"
          aria-label="Twitter"
        ></a>
        <a
          href="https://instagram.com/"
          className="fab fa-instagram"
          aria-label="Instagram"
        ></a>
        <a
          href="https://linkedin.com/"
          className="fab fa-linkedin"
          aria-label="LinkedIn"
        ></a>
        <a
          href="https://pinterest.com/"
          className="fab fa-pinterest"
          aria-label="Pinterest"
        ></a>
      </div>
      {/* <div className="links">
        <a href="/home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </div>
      <div className="credit">
        Created by <span>@mr._hackerbuddy</span> | All rights reserved
      </div> */}
    </footer>
  );
};

export default Footer;
