import React from "react";
import { Container, Navbar, Tabs, Tab, Carousel } from "react-bootstrap";
import "./product.css";
import Description from "./TabContent/Description";
import Information from "./TabContent/Information";
import Review from "./TabContent/Review";
import Footer from "../../Footer/Footer";
import ProductItem from "../CartShopping/ProductItem";

export default function Product() {
  return (
    <>
      <div className="ProductTitle mt-3">
        <Navbar>
          <Container>
            <h5>
              Product{" "}
              <span className="IconNav">
                <i class="bi bi-chevron-right"></i>
              </span>{" "}
              <span className="TitleNav">Watches Fashion</span>
            </h5>
          </Container>
        </Navbar>
      </div>

      <div>
        <Container>
          <div className="detailProduct py-3">
            <div className="detailProductLeft">
              <h1>Clothes Fashion</h1>
              <Carousel className="imageCss">
                <Carousel.Item interval={1000}>
                  <img src="asset/shop/26.jpg" alt="First slide" width="100%" height="700px" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img src="asset/shop/24.jpg" alt="Second slide" width="100%" height="700px" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="asset/shop/25.jpg" alt="Third slide" width="100%" height="700px" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="detailProductRight">
              <h1>By Clothes Fashion</h1>
              <div className="ProductHargaTitle mt-3">
                <div>
                  <h4>$30.00</h4>
                </div>
                <div className="IconStart ">
                  <span>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span className="titleHarga">(11 review)</span>
                </div>
              </div>
              <div className="description">
                <p>Look sporty this summer with a colorful t-shirt.Perfect to pair with black pants and white shoes for a stylish sporty feel.</p>
              </div>
              <div className="sizeItem">
                <h4>Size: S</h4>
                <ul>
                  <li>
                    <span>S</span>
                  </li>
                  <li>
                    <span>M</span>
                  </li>
                  <li>
                    <span>L</span>
                  </li>
                </ul>
              </div>
              <div className="btnToCart mt-3">
                <div className="numberInfo">
                  <input type="number" className="numberItem " placeholder="0" />
                </div>
                <button className="buttonAdd">Add To Cart</button>
              </div>
              <div className="brand mt-2">
                <img src="asset/brand/1.png" alt="" width="100px" />
                <img src="asset/brand/2.png" alt="" width="100px" />
                <img src="asset/brand/3.png" alt="" width="100px" />
                <img src="asset/brand/4.png" alt="" width="100px" />
              </div>
              <div className=" mt-3">
                <span className="InfoItem1">Size Guide</span>
                <span className="InfoItem2">Delivery & Return</span>
                <span className="InfoItem3">Ask a Question</span>
              </div>
              <div className="information mt-3">
                <h4>SKU: N/A</h4>
              </div>
              <div className="information">
                <h4>Categories: All, Best seller, Bottom, Dress, New Arrival, Tops, Women</h4>
              </div>
              <div className="information">
                <h4>Tags: Color White, Color Red, Price $7-$50, Size L, Size M, Size S, Creatif Fashion, Clothes</h4>
              </div>
              <div className="IconProductSosial mt-3">
                <span>
                  <i class="bi bi-facebook"></i>
                </span>
                <span>
                  <i class="bi bi-twitter"></i>
                </span>
                <span>
                  <i class="bi bi-instagram"></i>
                </span>
                <span>
                  <i class="bi bi-google"></i>
                </span>
                <span>
                  <i class="bi bi-whatsapp"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="itemInfo">
        <Container>
          <Tabs defaultActiveKey="description">
            <Tab eventKey="description" title="Description">
              <Description />
            </Tab>
            <Tab eventKey="information" title="Information">
              <Information />
            </Tab>
            <Tab eventKey="review" title="Review">
              <Review />
            </Tab>
          </Tabs>
        </Container>
      </div>

      <div>
        <ProductItem />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
