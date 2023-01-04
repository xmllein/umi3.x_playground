import React, { Component } from 'react';
import ListsItem1 from './lists-item1';
import ListItem2 from './lists-item2';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'item-name2',
    };
  }

  // 子组件调用
  handleChild = (name) => {
    console.log(name);
    this.setState({
      name,
    });
  };

  render() {
    return (
      <div>
        <ListsItem1 handleItem={this.handleChild} />
        <ListItem2 name={this.state.name} />
      </div>
    );
  }
}
