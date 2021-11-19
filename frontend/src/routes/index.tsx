import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import AddAdmin from "../pages/AddAdmin";

export default function Routes() {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={Product} />
      <Route exact path='/add_product' component={AddProduct} />
      <Route exact path='/update_product/:id/:product_id' component={UpdateProduct} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/administrators' component={Admin} />
      <Route exact path='/administrator/add' component={AddAdmin} />
    </>
  );
};