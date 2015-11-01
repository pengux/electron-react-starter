import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
import Header from './page/header';
import Footer from './page/footer';

export default React.createClass({

  mixins: [Reflux.ListenerMixin],

  componentWillMount() {
    console.log('About to mount App');
  },

  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, {query: this.props.query})}
        <Footer />

      </div>
    );
  }

});
