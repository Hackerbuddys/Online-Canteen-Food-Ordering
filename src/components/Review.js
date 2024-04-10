import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png"

const Review = () => {
  return (
    <>
      <section className="review">
        <h1 className="heading">
          Customer's <span>Review</span>
        </h1>
        <div className="box-container">
          {
            review.map((item, index) => (
              <div className="box">
                <img src={qouteImg} alt="" className="qoute" />
                <p>"A hidden gem! I stumbled upon this restaurant while exploring the neighborhood, and I'm so glad I did. The food was absolutely delicious, with fresh ingredients and unique flavors. The ambiance was cozy and inviting, perfect for a relaxed dining experience. The staff was friendly and attentive, making sure we had everything we needed. I'll definitely be coming back!"</p>
                {/* <p>"Had a wonderful dinner experience here with my family. The menu had a great variety of options to choose from, catering to everyone's tastes. We tried a few different dishes, and each one was bursting with flavor. The presentation was also top-notch, making the dining experience even more enjoyable. The staff was accommodating and provided excellent service throughout our meal. Highly recommend!"</p>
                <p>"Absolutely fantastic food and service! I've been a regular customer here for years, and the quality never disappoints. Whether it's breakfast, lunch, or dinner, every dish is cooked to perfection. The chefs truly know their craft, and it shows in every bite. The staff is like family, always welcoming and attentive. If you're looking for a memorable dining experience, look no further than this restaurant."</p> */}
                <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;