import React from "react";
import "./home.css";
import { Container, Row, Col, Card, Carousel, Button, Form } from "react-bootstrap";
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
                <h1>New Arrival Collection</h1>
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
          <Row>
            <Col lg={3} xs={6}>
              <Card>
                <img src="asset/shop/23.jpg" alt="" />

                <Button variant="dark">Women</Button>
              </Card>
            </Col>
            <Col lg={3} xs={6}>
              <Card>
                <img src="asset/shop/10.jpg" alt="" />

                <Button variant="dark">Accesories</Button>
              </Card>
            </Col>
            <Col lg={3} xs={6} className="ColCard">
              <Card>
                <img src="asset/shop/4.jpg" alt="" />

                <Button variant="dark">Footwear</Button>
              </Card>
            </Col>
            <Col lg={3} xs={6} className="ColCard">
              <Card>
                <img src="asset/shop/1.jpg" alt="" />

                <Button variant="dark">Watches</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Product">
        <Container>
          <Row className="py-2">
            <Col lg={5} xs={4} className=" m-auto text-center">
              <h1>Product Trending</h1>
              <h6 style={{ color: "blue" }}>Be Healty Creatif Fashion</h6>
            </Col>
          </Row>
          <Row className="Row" xs={2}>
            <Col lg={3} className="text-center">
              <Card className="Card  border-0  mb-2">
                <div className="imgArea">
                  <img src="asset/shop/1.jpg" alt="" className="img-fluid" />
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
                  <img src="asset/shop/3.jpg" alt="" className="img-fluid" />
                </div>

                <h5 className="mt-3">Bag Fashion</h5>

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

      <div className="about">
        <Container className="py-5">
          <Row className="py-5">
            <Col lg={8} className="m-auto text-center">
              <h1>Welcome To Our Creatif Fashion</h1>
              <h6 style={{ color: "blue" }}>Be Healty Creatif Fashion</h6>
            </Col>
            <div className="aboutItem">
              <Row>
                <Col lg={4}>
                  <img src="asset/clothes/1.jpg" className="img-fluid mb-3 " alt="" />
                  <h5>Best Quality</h5>
                  <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
                </Col>
                <Col lg={4}>
                  <img src="asset/clothes/3.jpg" className="img-fluid mb-3 " alt="" />
                  <h5>Best Quality</h5>
                  <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
                </Col>
                <Col lg={4}>
                  <img src="asset/clothes/2.jpg" className="img-fluid mb-3 " alt="" />
                  <h5>Best Quality</h5>
                  <p>Lorem ipsum dolor, sit amet consectrue magni blanditiis dolorem odit. low eos atque ipsum dolor odio nesunt.</p>
                </Col>
              </Row>
            </div>
            <Row className="pt-4">
              <Col lg={6} className="text-center m-auto">
                <button className="btn1">Shop More</button>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>

      <div className="apple py-5 ">
        <Container className="py-5  ">
          <Row className="py-5">
            <Col lg={6}>
              <h1 className="font-wight-bold py-3  ">Unlock Your Potential With Good Fashion </h1>
              <h6>Be Healty Creatif Fashion</h6>
              <button className="btn1 mt-3">More From Us</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact py-5">
        <Container className="py-5">
          <Row>
            <Col lg={5} className="m-auto text-center">
              <h1>Contact Us</h1>
              <h6 style={{ color: "blue" }}>Always Be In Touch With Us</h6>
            </Col>
            <Row className="py-5">
              <Col lg={9} className="m-auto">
                <Row>
                  <Col lg={4}>
                    <h6 className="h6">Location</h6>
                    <p>Jakarta 0827 Block E</p>
                    <h6 className="h6">Phone</h6>
                    <p>089536763348</p>
                    <h6 className="h6">Email</h6>
                    <p>Chandrafajar262@gmail.com</p>
                  </Col>
                  <Col lg={7}>
                    <Row>
                      <Col lg={12}>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
