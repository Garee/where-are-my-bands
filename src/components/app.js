import React from 'react';

import Search from './search';

import '../styles/app.css';

export default React.createClass({
  render: () => {
    return (
      <div className="ui center container">
        <Search />
        <div className="ui center aligned container push-top push-bottom">
          <div className="ui horizontal small divided link list">
            <a className="item" href="https://github.com/Garee/where-are-my-bands">Source</a>
            <a className="item" href="https://twitter.com/gblackwd">@gblackwd</a>
          </div>
        </div>
      </div>
    );
  }
});
