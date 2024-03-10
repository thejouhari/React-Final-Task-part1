import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Icon from "./icon.svg";
import CartIcon from "../Cart/cart-icon.svg";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <NavLink className="logo" to="/">
              <img src={Icon} />
              <span>iMarket</span>
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink className="cart" to="/cart">
              <img src={CartIcon} />
            </NavLink>
          </div>

          <div className="register">
            <NavLink className="signin" to="/signin">
              Sign In
            </NavLink>
            <NavLink className="signup" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
