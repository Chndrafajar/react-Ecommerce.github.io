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
      </ul>
    </div>
  );
}
