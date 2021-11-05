import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponents from "./components/Navbar/NavbarComponents";
import Home from "./components/Pages/Home/Home";
import ProductItem from "./components/Pages/CartShopping/ProductItem";
import Registrasi from "./components/Pages/Registrasi/Registrasi";
import Sukses from "./components/Pages/Sukses/Sukses";
import ShoppingCart from "./components/Pages/ShoppingCart/ShoppingCart";
import PortFolio from "./components/Pages/PortFolio/PortFolio";
import Blog from "./components/Pages/Blog/Blog";
import SignIn from "./components/Pages/SignIn/SignIn";
import Product from "./components/Pages/Product/Product";
import NotFound from "./components/Pages/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <NavbarComponents />

      <div className="pages">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/product" component={Product} />
          <Route path="/market">
            <ProductItem />
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/registrasi" component={Registrasi} />
          <Route path="/succes" component={Sukses} />
          <Route path="/portfolio" component={PortFolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/shopingcart" component={ShoppingCart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
