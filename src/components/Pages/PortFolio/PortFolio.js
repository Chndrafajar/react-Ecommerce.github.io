import { Container } from "react-bootstrap";
import "./portfolio.css";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList/PortfolioList";
import { allProduct, Clothes, watches, Shoes, Accesories } from "./PortfolioItem/data";

export default function PortFolio() {
  const [select, setSelect] = useState("all product");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all product",
      title: "All Product",
    },
    {
      id: "shoes",
      title: "Shoes",
    },
    {
      id: "accesories",
      title: "Accesories",
    },
    {
      id: "watches",
      title: "Watches",
    },
    {
      id: "clothes",
      title: "Clothes",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "all product":
        setData(allProduct);
        break;
      case "shoes":
        setData(Shoes);
        break;
      case "accesories":
        setData(Accesories);
        break;
      case "watches":
        setData(watches);
        break;
      case "clothes":
        setData(Clothes);
        break;
      default:
        setData(allProduct);
    }
  }, [select]);

  return (
    <>
      <div>
        <Container className="py-3">
          <div className="portfolioList">
            <ul>
              {list.map((item) => (
                <PortfolioList title={item.title} active={select === item.id} setSelect={setSelect} id={item.id} />
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="portfolio">
            {data.map((d) => (
              <div className="portfolioCard">
                <div className="blogCard ">
                  <div className="imgArea">
                    <img src={d.img} alt={d.title} className="img-fluid" />
                  </div>
                  <h5 className="mt-3">By Creatif Fashion</h5>
                  <h4 className="portfolioH4">
                    <span>Women</span>, <span>Clothes</span>, <span>Watches</span>, <span>Shoes</span>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
