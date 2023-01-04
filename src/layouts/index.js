import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>BasicLayout</h1>
        <ErrorBoundary>{this.props.children}</ErrorBoundary>
      </div>
    );
  }
}
