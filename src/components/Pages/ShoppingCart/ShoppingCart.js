import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./cart.css";
import { removeItem, addQuantity, subtractQuantity } from "../../actions/cartActions";
import Recipe from "../Recipe/Recipe";
import swal from "sweetalert";

class ShoppingCart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
    swal({
      title: "Are you sure?",
      text: "Remove your shopping from cart!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Succesfully deleted shopping!", {
          icon: "success",
        });
      } else {
        swal("Your shopping cart is safe!");
      }
    });
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
          <div className="shopCart">
            <div className="shopcartItem">
              <div className="shopCartLeft">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="shopCartDesc">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
              </div>
              <div className="shopCartCenter">
                <span>
                  <Link to="/shopingcart">
                    <button
                      className="btnGreen"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </Link>
                </span>

                <h4>{item.quantity}</h4>
                <span>
                  <Link to="/shopingcart">
                    <button
                      className="btnRed"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                  </Link>
                </span>
              </div>
              <div className="shopCartRight">
                <span
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  <i class="bi bi-x-lg"></i>
                </span>
              </div>
            </div>
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
