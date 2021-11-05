import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  return (
    <>
      <div className="Navbar">
        <Navbar bg="info" expand="lg">
          <Container>
            <Navbar.Brand>
              <span className="NavBrand">Creatif Fashion </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto my-2 my-lg-0 NavbarList ">
                <Link to="/">
                  <span>Home</span>
                </Link>
                <Link to="/market">
                  {" "}
                  <span>Market</span>
                </Link>
                <Link to="/portfolio">
                  <span>Portfolio</span>
                </Link>
                <Link to="/product">
                  <span>Product</span>
                </Link>
                <Link to="/blog">
                  <span>Blog</span>
                </Link>
              </Nav>

              <div className="navbarIcon">
                <span className="Icon2">
                  <i class="bi bi-search"></i>
                </span>
                <Link to="/signin" className="Link">
                  <span className="Icon1">
                    <i class="bi bi-person"></i>
                  </span>
                </Link>
                <Link to="/shopingcart">
                  {" "}
                  <span className="Icon3">
                    <i class="bi bi-cart2"></i>
                    <span className="navIcon">2</span>
                  </span>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Nav className="navbarBottomItem navbar-expand  text-info fixed-bottom d-md-none d-lg-none d-xl-none ">
        <ul className="navbar-nav nav-justified w-100">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              <div className="NavBottomHome">
                <i class="bi bi-house-fill"></i>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/market">
              {" "}
              <div className="NavBottomMarket">
                <i class="bi bi-shop"></i>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <div className="NavBottomSearch">
                <i class="bi bi-search"></i>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/shopingcart">
              {" "}
              <div className="NavBottomCart">
                <i class="bi bi-cart"></i>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/signin">
              <div className="NavBottomIconPerson">
                <i class="bi bi-person-circle"></i>
              </div>
            </Nav.Link>
          </Nav.Item>
        </ul>
      </Nav>
    </>
  );
}
