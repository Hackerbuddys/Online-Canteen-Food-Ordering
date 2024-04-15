import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="https://www.facebook.com/" class="fab fa-facebook-f"></a>
          <a href="https://twitter.com/" class="fab fa-twitter"></a>
          <a href="https://instagram.com/" class="fab fa-instagram"></a>
          <a href="https://linkedin.com/" class="fab fa-linkedin"></a>
          <a href="https://pinterest.com/" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="/home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>
        <div class="credit">
          created by <span>@mr._hackerbuddy</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
