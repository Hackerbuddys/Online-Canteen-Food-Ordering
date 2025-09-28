import React from "react";
import aboutImg from "../assets/images/New-image.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>
      <div className="row">
        <div className="image">
          <img src={aboutImg} alt="" />
        </div>
        <div className="content">
          <h3>What Make Our Food Spacial</h3>
          <p>
            At Our Restaurant, we redefine the art of dining with our
            extraordinary culinary creations. Handcrafted with passion and
            precision, each dish is a symphony of flavors, carefully curated to
            tantalize your taste buds. From locally sourced ingredients bursting
            with freshness to innovative presentations that ignite your senses,
            every bite is a journey of discovery.
          </p>
          <p>
            Join us for an unforgettable dining experience where every meal is a
            celebration of taste, creativity, and pure indulgence.
          </p>
          <a href="/about" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
