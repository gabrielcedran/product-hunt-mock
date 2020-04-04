import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './components/Main/Main';
import Product from './components/Main/Product/Product';

const Routes = () => (
  <BrowserRouter>
    {/* Switch allows only one Route to be rendered. It stops in the first match 
      * By default, Routes try to match prefix.
      */}
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/products/:id" component={Product}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;