import React from "react";
import { Container, Navbar, Tabs, Tab, Col, Card, Row } from "react-bootstrap";
import "./product.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Description from "./TabContent/Description";
import Information from "./TabContent/Information";
import Review from "./TabContent/Review";
import Footer from "../../Footer/Footer";
import ProductDetail1 from "./ProductDetail/ProductDetail1";
import ProductDetail2 from "./ProductDetail/ProductDetail2";
import ProductDetail3 from "./ProductDetail/ProductDetail3";

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
              <div>
                <Switch>
                  <Route path="/productDetail1" component={ProductDetail1} />
                  <Route path="/productDetail2" component={ProductDetail2} />
                  <Route path="/productDetail3" component={ProductDetail3} />
                  <Redirect to="/productDetail2" />
                </Switch>
              </div>
              <div className="btnProduct mt-2">
                <Link to="/productDetail2">
                  <div className="Imgleft">
                    <img src="asset/shop/25.jpg" alt="" width="80px" height="80px" />
                  </div>
                </Link>
                <Link to="/productDetail1">
                  <div className="Imgcenter">
                    <img src="asset/shop/24.jpg" alt="" width="80px" height="80px" />
                  </div>
                </Link>
                <Link to="/productDetail3">
                  <div className="ImgRight">
                    <img src="asset/shop/26.jpg" alt="" width="80px" height="80px" />
                  </div>
                </Link>
              </div>
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

      <div className="Product">
        <Container>
          <Row className="py-2">
            <Col lg={5} className=" m-auto text-center">
              <h1>New productw</h1>
              <h6 style={{ color: "blue" }}>Be Healty Creatif Fashion</h6>
            </Col>
          </Row>
          <Row className="Row" xs={2}>
            <Col lg={3} className="text-center">
              <Card className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/9.jpg" alt="" className="img-fluid" />
                </div>

                <h5 className="mt-3">bag Fashion</h5>

                <div className="IconStartHome ">
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
                </div>
                <h6>$29.99</h6>
              </Card>
            </Col>
            <Col lg={3} className="text-center">
              <Card className="Card   border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/2.jpg" alt="" className="img-fluid" />
                </div>

                <h5 className="mt-3">Shoe Fashion</h5>

                <div className="IconStartHome ">
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
                </div>
                <h6>$29.99</h6>
              </Card>
            </Col>
            <Col lg={3} className="text-center">
              <Card className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/16.jpg" alt="" className="img-fluid" />
                </div>

                <h5 className="mt-3">Clothes Fashion</h5>

                <div className="IconStartHome ">
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
                </div>
                <h6>$29.99</h6>
              </Card>
            </Col>
            <Col lg={3} className="text-center">
              <Card className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/4.jpg" alt="" className="img-fluid" />
                </div>

                <h5 className="mt-3">Shoe Fashion</h5>

                <div className="IconStartHome ">
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
                </div>
                <h6>$29.99</h6>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="text-center m-auto mt-3">
              <button className="btn1">Click For More</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
