import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import "./blog.css";

export default function Blog() {
  return (
    <>
      <div>
        <Container className="py-5">
          <Row>
            <Col lg={4}>
              <Card className="CardBlog border-0">
                <div className="imgArea">
                  <img src="asset/model/1.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="CardBlog border-0">
                <div className="imgArea">
                  <img src="asset/model/2.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="CardBlog border-0">
                <div className="imgArea">
                  <img src="asset/model/3.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="CardBlogBottom border-0 ">
                <div className="imgArea">
                  <img src="asset/model/4.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="CardBlogBottom border-0 ">
                <div className="imgArea">
                  <img src="asset/model/8.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="CardBlogBottom border-0">
                <div className="imgArea">
                  <img src="asset/model/9.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4>Spring-Summer Trending 2020</h4>
              </Card>
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
