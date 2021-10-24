import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../components/Product";

export default function Routes() {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={Product} />
    </>
  );
};