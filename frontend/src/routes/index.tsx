import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../components/Product";
import AddProduct from "../components/AddProduct";

export default function Routes() {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={Product} />
      <Route exact path='/add_product' component={AddProduct} />
    </>
  );
};