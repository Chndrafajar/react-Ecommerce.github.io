import React, { Component } from "react";
import { connect } from "react-redux";
import "./recipe.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }
  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="containerRecipe">
        <div className="collectionRecipe">
          <li className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span>Shipping</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: {this.props.total} $</b>
          </li>
        </div>
        <div className="checkout">
          <Button variant="info" as={Link} to="/succes">
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
