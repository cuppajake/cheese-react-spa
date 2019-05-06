import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './views/HomeView';
import Cheeses from './views/CheesesView';
import Categories from './views/CategoriesView';
import Menus from './views/MenusView';

const Routes = () => (
  <Switch>
    {/* we will implement these Route components later */}
    <Route exact path="/" component={Home} />
    <Route path="/cheeses" component={Cheeses} />
    <Route path="/categories" component={Categories} />
    <Route path="/menus" component={Menus} />
  </Switch>
);

export default Routes;