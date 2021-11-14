import React from "react";
import { Container, Navbar, Tabs, Tab } from "react-bootstrap";
import "./product.css";
import Description from "./TabContent/Description";
import Information from "./TabContent/Information";
import Review from "./TabContent/Review";
import Footer from "../../Footer/Footer";
import { Product1, Product2, Product3 } from "./ProductDetail/data";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

export default function Product() {
  const [select, setSelect] = useState("product1");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "product1",
      title: "Product1",
    },
    {
      id: "product2",
      title: "Product2",
    },
    {
      id: "product3",
      title: "Product3",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "product1":
        setData(Product1);
        break;
      case "product2":
        setData(Product2);
        break;
      case "product3":
        setData(Product3);
        break;
      default:
        setData(Product1);
    }
  }, [select]);

  return (
    <>
      {/* component Product 1 */}
      <div className="ProductTitle mt-3">
        <div>
          <Container>
            <h5>
              Product{" "}
              <span className="IconNav">
                <i class="bi bi-chevron-right"></i>
              </span>{" "}
              <span className="TitleNav">Watches Fashion</span>
            </h5>
          </Container>
        </div>
      </div>
      <div>
        <Container>
          <div className="detailProduct py-3">
            <div className="detailProductLeft">
              <h1>Clothes Fashion</h1>
              {data.map((d) => (
                <div>
                  <img src={d.img} alt={d.title} width="100%" height="70%" />
                </div>
              ))}

              <div className="productList">
                <ul>
                  {list.map((item) => (
                    <ProductList title={item.title} active={select === item.id} setSelect={setSelect} id={item.id} />
                  ))}
                </ul>
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

      {/* component Product 2 */}
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

      {/* component Product 3 */}
      <div className="productTitle">
        <div className="productTitleItem">
          <h1>New product</h1>
          <h6 style={{ color: "blue" }}>Be Healty Creatif Fashion</h6>
        </div>
      </div>
      <div className="Product">
        <Container>
          <div className="newProductItem">
            <div className="newProductCard">
              <div className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/9.jpg" alt="" className="img-fluid" />
                </div>
                <div className="textCard">
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
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div className="Card   border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="textCard">
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
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/16.jpg" alt="" className="img-fluid" />
                </div>
                <div className="textCard">
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
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/4.jpg" alt="" className="img-fluid" />
                </div>
                <div className="textCard">
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div className="btnCardProduct">
          <button className="btn1">Click For More</button>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
