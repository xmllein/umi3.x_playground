import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
export default class Search extends Component {
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
    // console.log(value, 'submit');
    this.props.dispatch({
      type: 'search/getListsAsync',
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
