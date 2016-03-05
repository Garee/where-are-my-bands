import React from 'react';

import '../styles/search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
        query: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      // Display results.
    }
  }

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h1>Where are my bands?</h1>
          <div className="field">
             <div className="ui huge fluid icon input">
               <input
                 type="text"
                 value={this.state.query}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress} />
               <i className="search icon"></i>
             </div>
           </div>
          </div>
      </div>
    );
  }
};

export default Search;
