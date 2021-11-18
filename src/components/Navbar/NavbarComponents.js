import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function NavbarComponents({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div className={"navbar " + (menuOpen && "active")}>
        <div className="navbarItem">
          <div className="navbarLeft">
            <span>CFashion</span>
          </div>
          <div className="navbarCenter">
            <div className="itemContainer">
              <Link to="/" className={"linkNav " + (menuOpen && "active")}>
                {" "}
                <span>Home</span>{" "}
              </Link>
            </div>
            <div className="itemContainer">
              <Link to="/market" className={"linkNav " + (menuOpen && "active")}>
                {" "}
                <span>Market</span>
              </Link>
            </div>
            <div className="itemContainer">
              <Link to="/product" className={"linkNav " + (menuOpen && "active")}>
                <span>Product</span>
              </Link>
            </div>
            <div className="itemContainer">
              <Link to="/portfolio" className={"linkNav " + (menuOpen && "active")}>
                {" "}
                <span>Portfolio</span>
              </Link>
            </div>
            <div className="itemContainer">
              <Link to="/blog" className={"linkNav " + (menuOpen && "active")}>
                {" "}
                <span>Blog</span>
              </Link>
            </div>
          </div>
          <div className="navbarRight">
            <div className="navRightSearch">
              <label>
                <input type="text" placeholder="search..." className="px-3" />
                <button className="btn3">Search</button>
              </label>
            </div>
            <div className="pemalang" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={"item1 " + (menuOpen && "active")}></span>
              <span className={"item2 " + (menuOpen && "active")}></span>
              <span className={"item3 " + (menuOpen && "active")}></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <nav className="navbarBottom">
        <Link to="/" className="linkBottom">
          <span>
            <i class="bi bi-house-fill"></i>
          </span>
        </Link>

        <Link to="/market" className="linkBottom">
          <span>
            <i class="bi bi-shop"></i>
          </span>
        </Link>
        <Link to="/shopingcart" className="linkBottom">
          <span>
            <i class="bi bi-cart"></i>
          </span>
        </Link>
        <Link to="/signin" className="linkBottom">
          <span>
            <i class="bi bi-person-circle"></i>
          </span>
        </Link>
      </nav>
    </>
  );
}
