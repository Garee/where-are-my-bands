import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

import SearchResult from './search-result';

import logo from '../../assets/logo.png';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      isLoading: false,
      result: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.state.query !== '') {
      this.setState({isLoading: true});

      axios.get(`/events/${this.state.query}`)
        .then(response => {
          this.setState({
            isLoading: false,
            result: response.data
          });
        })
        .catch(error => {
          console.error(error);
          this.setState({
            isLoading: false,
            result: []
          });
        });
    }
  }

  render() {
    const searchClass = classNames(
      'ui huge fluid icon input',
      {'loading': this.state.isLoading}
    );

    return (
      <div className="push-top">
        <div className="ui four column centered grid">
          <div className="ten wide column">
            <div className="ui center aligned container">
              <img className="logo" src={logo} />
            </div>
            <div className={searchClass}>
              <input
                type="text"
                value={this.state.query}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                autoFocus/>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <SearchResult events={this.state.result} />
      </div>
    );
  }
};

export default Search;
