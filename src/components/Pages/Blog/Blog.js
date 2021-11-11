import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import "./blog.css";

export default function Blog() {
  return (
    <>
      <div className="blogTop">
        <Container className="py-5  ">
          <div className="blog">
            <div className="blogTitle">
              <h1>Find Trending Products Here! </h1>
              <h6>Be Healty Creatif Fashion</h6>
              <button className="btnBlog mt-3">More From Us</button>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container className="py-5">
          <div className="blogItem">
            <div>
              <div className="blogCard">
                <div className="imgArea">
                  <img src="asset/model/1.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
              </div>
            </div>
            <div>
              <div className="blogCard">
                <div className="imgArea">
                  <img src="asset/model/2.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
              </div>
            </div>
            <div>
              <div className="blogCard">
                <div className="imgArea">
                  <img src="asset/model/3.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
              </div>
            </div>

            <div>
              <div className="blogCard">
                <div className="imgArea">
                  <img src="asset/model/4.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
              </div>
            </div>
            <div>
              <div className="blogCard ">
                <div className="imgArea">
                  <img src="asset/model/8.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
              </div>
            </div>
            <div>
              <div className="blogCard">
                <div className="imgArea">
                  <img src="asset/model/9.jpg" alt="" className="img-fluid" />
                </div>
                <h5 className="mt-3">By admin on May 8, 2020</h5>
                <h4 className="blogH4">Spring-Summer Trending 2020</h4>
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
