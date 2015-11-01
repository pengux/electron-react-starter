import React from 'react';
import App from './app';
import Start from './page/start';
import NotFound from './page/not-found';
import { Router, Route, IndexRoute } from 'react-router';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Start} />
    <Route path="*" component={NotFound} />
  </Route>
);