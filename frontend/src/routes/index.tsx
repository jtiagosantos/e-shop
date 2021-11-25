import { Route } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

import Home from "../pages/Home";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import AddAdmin from "../pages/AddAdmin";
import About from "../pages/About";
import Unauthorized from "../pages/Unauthorized";
import Address from "../pages/Address";
import Payment from "../pages/Payment";

export default function Routes() {
  const { isAdmin, token } = useAuthContext();

  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={Product} />
      <Route exact path='/add_product' component={isAdmin ? AddProduct : Unauthorized} />
      <Route exact path='/update_product/:id/:product_id' component={isAdmin ? UpdateProduct : Unauthorized} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/cart' component={token ? Cart : Unauthorized} />
      <Route exact path='/administrators' component={isAdmin ? Admin : Unauthorized} />
      <Route exact path='/administrator/add' component={isAdmin ? AddAdmin : Unauthorized} />
      <Route exact path='/about' component={About} />
      <Route exact path='/address' component={token ? Address : Unauthorized} />
      <Route exact path='/payment' component={token ? Payment : Unauthorized} />
    </>
  );
};