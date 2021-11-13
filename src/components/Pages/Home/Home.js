import "./home.css";
import { Container, Carousel, Button } from "react-bootstrap";
import Footer from "../../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="Home">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src="asset/banner/3.jpg" alt="First slide" />
            <Carousel.Caption>
              <div className="CarousalItem">
                <h3>NEW SEASON</h3>
                <h1>LookBook Collection</h1>
                <Button variant="dark">Explore Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="asset/banner/parallax.jpg" alt="Second slide" />

            <Carousel.Caption>
              <div className="CarousalItem">
                <h3>SUMMER 2020</h3>
                <h1>New Arrival </h1>
                <Button variant="dark">Explore Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="asset/banner/2.jpg" alt="Third slide" />

            <Carousel.Caption>
              <div className="CarousalItem">
                <h3>SUMMER SALE</h3>
                <h1>Save Up To 70%</h1>
              </div>
              <Button variant="dark">Explore Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="new py-5">
        <Container className="py-5">
          <div className="newProductHome">
            <div className="newProductCard">
              <div>
                <img src="asset/shop/23.jpg" alt="" />
                <div className="btnHome">
                  <span>Women</span>
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div>
                <img src="asset/shop/15.jpg" alt="" />
                <div className="btnHome">
                  <span>Accesories</span>
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div>
                <img src="asset/shop/4.jpg" alt="" />
                <div className="btnHome">
                  <span>Footwear</span>
                </div>
              </div>
            </div>
            <div className="newProductCard">
              <div>
                <img src="asset/shop/1.jpg" alt="" />
                <div className="btnHome">
                  <span>Watches</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="productTitle">
        <div className="productTitleItem">
          <h1>Product Trending</h1>
          <h6 className="homeH6" style={{ color: "blue" }}>
            Be Healty Creatif Fashion
          </h6>
        </div>
      </div>

      <div className="Product">
        <Container>
          <div className="newProductItem">
            <div className="newProductCard">
              <div className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/1.jpg" alt="" className="img-fluid" />
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
                  <img src="asset/shop/3.jpg" alt="" className="img-fluid" />
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

      <div className="about">
        <Container className="py-5">
          <div className="productTitle">
            <div className="productTitleItem">
              <h1>Welcome To Our Creatif Fashion</h1>
              <h6 className="Homeh6" style={{ color: "blue" }}>
                Be Healty Creatif Fashion
              </h6>
            </div>
          </div>

          <div className="aboutItem">
            <div className="HomeCard">
              <div className="homeCardItem">
                <img src="asset/clothes/1.jpg" className="img-fluid mb-3 " alt="" />
                <h5>Best Quality</h5>
                <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
              </div>
              <div className="homeCardItem">
                <img src="asset/clothes/3.jpg" className="img-fluid mb-3 " alt="" />
                <h5>Best Quality</h5>
                <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
              </div>
              <div className="homeCardItem">
                <img src="asset/clothes/2.jpg" className="img-fluid mb-3 " alt="" />
                <h5>Best Quality</h5>
                <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="btnCardHome">
              <button className="btn1">Shop More</button>
            </div>
          </div>
        </Container>
      </div>

      <div className="apple py-5 ">
        <Container className="py-5  ">
          <div className="blog">
            <div className="blogTitle">
              <h1 className="h1Home">Unlock Your Potential With Good Fashion </h1>
              <h6>Be Healty Creatif Fashion</h6>
              <button className="btnBlog mt-3">More From Us</button>
            </div>
          </div>
        </Container>
      </div>

      <div className="contact py-5">
        <Container className="py-5">
          <div className="productTitle">
            <div className="productTitleItem">
              <h1>Contact Us</h1>
              <h6 className="Homeh6" style={{ color: "blue" }}>
                Always Be In Touch With Us
              </h6>
            </div>
          </div>

          <div className="homeContact">
            <div className="homeLeft">
              <h6 className="h6">Location</h6>
              <p>Jakarta 0827 Block E</p>
              <h6 className="h6">Phone</h6>
              <p>089536763348</p>
              <h6 className="h6">Email</h6>
              <p>Chandrafajar262@gmail.com</p>
            </div>

            <div className="homeRight">
              <div className="ContactInput">
                <label>Email Adress</label>
                <input type="text" placeholder="Email Adress" />
                <label className="textareaHome">Example Textarea</label>
                <textarea placeholder="Example Textarea"></textarea>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
