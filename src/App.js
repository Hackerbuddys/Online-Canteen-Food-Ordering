import React from "react";
import "./assets/CSS/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />
      <div>
        fffdd
        <Chatbot />
      </div>
    </>
  );
}

export default App;
