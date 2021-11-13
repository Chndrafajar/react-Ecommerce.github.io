import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/" className="link">
            {" "}
            <span>Home</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/market" className="link">
            {" "}
            <span>Market</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/portfolio" className="link">
            {" "}
            <span>Portfolio</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/product" className="link">
            {" "}
            <span>Product</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/blog" className="link">
            {" "}
            <span>Blog</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/shopingcart" className="link">
            {" "}
            <span>Shopping Cart</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/signin" className="link">
            <span>Login</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="registrasi" className="link">
            {" "}
            <span>Registrasi</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
