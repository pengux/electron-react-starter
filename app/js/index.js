import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from './routes';

if(process.env.NODE_ENV !== 'production') {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
