import React, { Component } from 'react';

export default class ComponentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'demo',
    };
    console.log('新生命周期===> constructor');
  }

  static getDerivedStateFromProps(props, state) {
    // componentWillReceiveProps
    console.log('新生命周期===> getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('新生命周期===> componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // componentWillUpdate
    console.log('新生命周期===> getSnapshotBeforeUpdate');
    return 'getSnapshotBeforeUpdate';
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('新生命周期===> shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(props, state, snapshot) {
    console.log(snapshot);
    console.log('新生命周期===> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('新生命周期===> componentWillUnmount');
  }

  // 点击
  handleClick = () => {
    this.setState({
      text: 'demo1',
    });
  };

  render() {
    console.log('新生命周期===> render');
    return (
      <div onClick={this.handleClick}>ComponentNew --- {this.state.text}</div>
    );
  }
}
