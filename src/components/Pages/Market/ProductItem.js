import { Container } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import "./productItem.css";
import { addToCart } from "../../actions/cartActions";
import swal from "sweetalert";
import { Link, Switch, Route } from "react-router-dom";
import ShopProduct from "./ShopProduct/ShopProduct";
import Footer from "../../Footer/Footer";

class ProductItem extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
    swal("Success!", "Product Successfully Added To Cart!", "success");
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="newProductCard">
          <div
            className="Card  border-0  mb-2"
            onClick={() => {
              this.handleClick(item.id);
            }}
          >
            <div className="imgArea">
              <img src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <div className="textCard">
              <h5 className="mt-3">{item.title}</h5>

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
              <h6>${item.price}</h6>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="center">
          <Container className="py-5  ">
            <div className="blog">
              <div className="blogTitle">
                <h1>There Are Various Kinds Of The Best Fashion Variants Here! </h1>
                <h6>Be Healty Creatif Fashion</h6>
                <button className="btnBlog mt-3">More From Us</button>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="filterProduct">
              <div className="filterProductLeft">
                <span>
                  <i class="bi bi-filter-right"></i>
                </span>
                Filter
              </div>
              <div className="filterProductRight">
                <select>
                  <option>Featured</option>
                  <option>Best Selling</option>
                  <option>Price</option>
                  <option>Star</option>
                  <option>Date</option>
                </select>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="newProductItem">{itemList}</div>
          <Switch>
            <Route path="/shopProductNew" component={ShopProduct} />
          </Switch>
          <div>
            <div className="btnCardProduct">
              <Link to="/shopProductNew">
                {" "}
                <button className="btnMrket">Click For More</button>
              </Link>
            </div>
          </div>
        </Container>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
