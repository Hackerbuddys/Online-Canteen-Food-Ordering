import React from "react";
import "./assets/CSS/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
    </>
  );
}

export default App;
