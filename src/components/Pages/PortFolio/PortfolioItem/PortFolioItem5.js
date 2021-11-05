import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export default function PortFolioItem5() {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <Card className="CardBlog border-0">
            <div className="imgArea">
              <img src="asset/shop/23.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlog border-0">
            <div className="imgArea">
              <img src="asset/shop/24.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlog border-0">
            <div className="imgArea">
              <img src="asset/shop/25.jpg" alt="" className="img-fluid" />
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
