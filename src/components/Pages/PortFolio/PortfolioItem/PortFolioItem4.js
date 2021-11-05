import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export default function PortFolioItem4() {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <Card className="CardBlogBottom border-0">
            <div className="imgArea">
              <img src="asset/watches/3.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlogBottom border-0">
            <div className="imgArea">
              <img src="asset/watches/1.jpg" alt="" className="img-fluid" />
            </div>
            <h2>Creatif Fashion</h2>
            <h5>
              <span>Accesories</span>,<span>Watches</span>,<span>Footwear</span>
            </h5>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="CardBlogBottom border-0">
            <div className="imgArea">
              <img src="asset/watches/4.jpg" alt="" className="img-fluid" />
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
