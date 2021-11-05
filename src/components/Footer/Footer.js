import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Bottom mt-5">
      <Container className="py-5">
        <Row>
          <Col lg={9} className="m-auto text-center">
            <h1>Join Our Secret Society</h1>
            <input
              type="text"
              placeholder="Enter Your 
              Email"
              className="px-3"
            />

            <button className="btn2">Submit</button>
          </Col>
        </Row>
        <Row>
          <Col lg={11} className="py-3">
            <Row>
              <Col lg={3} className="py-3">
                <h5 className="pb-3">CUSTOMER CARE</h5>
                <p>Regular</p>
                <p>On Time</p>
                <p>Always Care</p>
              </Col>
              <Col lg={3} className="py-3">
                <h5 className="pb-3">CUSTOMER CARE</h5>
                <p>Regular</p>
                <p>On Time</p>
                <p>Always Care</p>
              </Col>
              <Col lg={3} className="py-3">
                <h5 className="pb-3">CUSTOMER CARE</h5>
                <p>Regular</p>
                <p>On Time</p>
                <p>Always Care</p>
              </Col>
              <Col lg={3} className="py-3">
                <h5 className="pb-3">CUSTOMER CARE</h5>
                <div className="IconSosial">
                  <div>
                    <i class="bi bi-facebook"></i>
                  </div>

                  <div>
                    <i class="bi bi-instagram"></i>
                  </div>

                  <div>
                    <i class="bi bi-twitter"></i>
                  </div>

                  <div>
                    <i class="bi bi-google"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <p className="text-center mt-5">Copyright 2021 All rights reserved | This Template is made with by Chandra Fajar</p>
      </Container>
    </div>
  );
}
