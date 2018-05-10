import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import ListPage from "./pages/list";
import UserPage from "./pages/user";
import CartPage from "./pages/cart";
import ChoosePage from "./pages/choose";
import DetailsPage from "./pages/details";

const App = () => (
  <Router>
    <div>
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/choose" component={ChoosePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/user" component={UserPage} />
    </div>
  </Router>
);

export default App;
