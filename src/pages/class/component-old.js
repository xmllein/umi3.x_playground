import React, { Component, PureComponent } from 'react';

export default class ComponentOld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'demo',
    };
    console.log('生命周期===> constructor');
  }

  componentWillMount() {
    console.log('生命周期===> componentWillMount');
  }

  componentDidMount() {
    console.log('生命周期===> componentDidMount');
  }
  // 或者使用 PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   console.log('生命周期===> shouldComponentUpdate');
  //   if (this.state.text !== nextState.text) {
  //     return true;
  //   }
  //   return false;
  // }

  componentWillUpdate() {
    console.log('生命周期===> componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('生命周期===> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('生命周期===> componentWillUnmount');
  }

  // 事件点击
  handleClick = () => {
    this.setState({
      text: 'demo1',
    });
  };

  render() {
    console.log('生命周期===> render');
    return (
      <div onClick={this.handleClick}>ComponentOld -- {this.state.text}</div>
    );
  }
}
