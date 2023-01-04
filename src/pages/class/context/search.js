import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Search extends Component {
  static contextType = SearchContext;

  constructor(props) {
    super(props);
    this.state = {
      value: '美食',
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  handleSubmit = (value) => {
    this.context.dispatch({
      type: 'changeText',
      payload: this.state.value,
    });
    this.context.dispatch({
      type: 'changeLists',
      payload: this.state.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          value={this.state.value}
          placeholder="Search"
          maxLength={8}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
