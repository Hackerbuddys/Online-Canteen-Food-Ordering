import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="/home" class="title">
                  {item.title}
                </a>
                <span>by admin / {item.date}</span>
                <p>{item.desc}</p>
                <a href="/about">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
