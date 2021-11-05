import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import PortFolioItem1 from "./PortfolioItem/PortFolioItem1";
import PortFolioItem2 from "./PortfolioItem/PortFolioItem2";
import PortFolioItem3 from "./PortfolioItem/PortFolioItem3";
import PortFolioItem4 from "./PortfolioItem/PortFolioItem4";
import PortFolioItem5 from "./PortfolioItem/PortFolioItem5";
import Footer from "../../Footer/Footer";

export default function PortFolio() {
  return (
    <>
      <div>
        <Container className="py-3">
          <Row className="py-2">
            <Col lg={7} className=" m-auto text-center">
              <div className="btnPorffolio">
                <Link to="/portFolioItem1">
                  {" "}
                  <button className="All">
                    ALL<span className="bagIcon">(12)</span>
                  </button>
                </Link>
                <Link to="/portFolioItem2">
                  <button className="shoes">
                    Shoes<span className="bagIcon">(3)</span>
                  </button>
                </Link>
                <Link to="/portFolioItem3">
                  <button className="Accesories">
                    Accesories<span className="bagIcon">(3)</span>
                  </button>
                </Link>
                <Link to="/portFolioItem4">
                  <button className="Watches">
                    Watches<span className="bagIcon">(3)</span>
                  </button>
                </Link>
                <Link to="/portFolioItem5">
                  <button className="Clothes">
                    Clothes<span className="bagIcon">(3)</span>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="portfolio">
        <Container>
          <Row>
            <Switch>
              <Route path="/portFolioItem1" component={PortFolioItem1} />
              <Route path="/portFolioItem2" component={PortFolioItem2} />
              <Route path="/portFolioItem3" component={PortFolioItem3} />
              <Route path="/portFolioItem4" component={PortFolioItem4} />
              <Route path="/portFolioItem5" component={PortFolioItem5} />
              <Redirect to="/portFolioItem1" />
            </Switch>
          </Row>
        </Container>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
