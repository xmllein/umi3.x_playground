import React, { Component } from 'react';

export default class ListItem2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>ListItem2 - {this.props.name}</div>;
  }
}
