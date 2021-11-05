import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./cart.css";
import { removeItem, addQuantity, subtractQuantity } from "../../actions/cartActions";
import Recipe from "../Recipe/Recipe";

class ShoppingCart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="listCartBottom">
            <table>
              <thead>
                <tr>
                  <td>Id</td>

                  <td>Product</td>

                  <td>Price</td>

                  <td>Quantity</td>

                  <td>Add & Min</td>

                  <td>Remove</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="listCartId">{item.id}</span>
                  </td>
                  <td>
                    <div className="listCartItem">
                      <img src={item.img} alt={item.title} className="listCartImg" />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <div className="CartItemBtn">
                      <span>
                        <Link to="/shopingcart">
                          <Button
                            variant="success"
                            onClick={() => {
                              this.handleAddQuantity(item.id);
                            }}
                          >
                            <i class="bi bi-plus"></i>
                          </Button>
                        </Link>
                      </span>

                      <span>
                        <Link to="/shopingcart">
                          <Button
                            variant="danger"
                            onClick={() => {
                              this.handleSubtractQuantity(item.id);
                            }}
                          >
                            <i class="bi bi-dash"></i>
                          </Button>
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="CartItemRemove">
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.handleRemove(item.id);
                        }}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })
    ) : (
      <div className="CartItemEmpty">Nothing Order </div>
    );
    return (
      <Container className="mt-5">
        <div className="cart">
          <h5>You have ordered:</h5>

          <div className="cartItems mt-3">{addedItems}</div>

          <Recipe />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
