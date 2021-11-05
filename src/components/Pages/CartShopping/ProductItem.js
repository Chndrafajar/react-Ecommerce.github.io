import { Container, Col, Card, Row } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import "./productItem.css";
import { addToCart } from "../../actions/cartActions";
import swal from "sweetalert";

class ProductItem extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
    swal("Success!", "Product Successfully Added To Cart!", "success");
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <Col
          lg={3}
          xs={6}
          md={4}
          className="text-center"
          onClick={() => {
            this.handleClick(item.id);
          }}
        >
          <Card className="Card  border-0  mb-2">
            <div className="imgArea">
              <img src={item.img} alt={item.title} className="img-fluid" />
            </div>

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
          </Card>
        </Col>
      );
    });
    return (
      <Container className=" py-5">
        <h3 className="center">Our items</h3>
        <Row className="mt-3">{itemList}</Row>
      </Container>
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
