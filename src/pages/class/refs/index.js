import React, { Component, createRef } from 'react';
import Child from './child';
import InputeForward from './forward';
export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.domRef.current);
    console.log(this.childRef.current);

    this.inputRef.current.focus();
  }

  handleClick = () => {
    this.childRef.current.changeText('change child text');
  };

  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef} />
        <button onClick={this.handleClick}>修改child 的值</button>
        <InputeForward ref={this.inputRef} />
      </div>
    );
  }
}
