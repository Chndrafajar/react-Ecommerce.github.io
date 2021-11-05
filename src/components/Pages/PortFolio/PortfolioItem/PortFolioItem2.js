import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export default function PortFolioItem2() {
  return (
    <div>
      <Row lg={6} className=" m-auto text-center">
        <Col lg={4}>
          <Card className="CardBlogBottom border-0 ">
            <div className="imgArea">
              <img src="asset/shop/12.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlogBottom border-0 ">
            <div className="imgArea">
              <img src="asset/shop/2.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlogBottom border-0 ">
            <div className="imgArea">
              <img src="asset/shop/7.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
