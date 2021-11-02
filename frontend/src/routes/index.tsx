import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";

export default function Routes() {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={Product} />
      <Route exact path='/add_product' component={AddProduct} />
      <Route exact path='/update_product/:id/:product_id' component={UpdateProduct} />
    </>
  );
};