import React from "react";
import "./Nav.css";

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
              <span>Home</span>
            </div>
            <div className="itemContainer">
              <span>Market</span>
            </div>
            <div className="itemContainer">
              <span>Portfolio</span>
            </div>
            <div className="itemContainer">
              <span>Blog</span>
            </div>
          </div>
          <div className="navbarRight">
            <div className="pemalang" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={"item1 " + (menuOpen && "active")}></span>
              <span className={"item2 " + (menuOpen && "active")}></span>
              <span className={"item3 " + (menuOpen && "active")}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
