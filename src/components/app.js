import React from 'react';

import Search from './search';
import Footer from './footer';

import '../styles/app.css';

export default React.createClass({
  render: () => {
    return (
      <div className="ui center container">
        <Search />
        <Footer />
      </div>
    );
  }
});
