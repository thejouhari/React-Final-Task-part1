import React from "react";
import "./home.css";
import Categories from "../Categories/Categories";

export default function Home() {
  return (
    <>
      <div className="homePage">
        <p>
          <span className="welcome">Welcome</span> to{" "}
          <span className="market"> iMarket</span>
          <br /> your go-to destination for all your shopping needs!
          <br /> Explore our wide range of products and enjoy a seamless
          shopping experience.
          <br />
          <span className="happy"> Happy browsing!</span>
        </p>
      </div>
      <Categories />
    </>
  );
}
