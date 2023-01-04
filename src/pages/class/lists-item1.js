import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListsItem1 extends Component {
  // 默认属性值
  static defaultProps = {
    name: 'item1',
  };

  // 验证属性类型
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    console.log('ListsItem1');
    this.props.handleItem('item1');
  };

  render() {
    return <div onClick={this.handleClick}>ListsItem1-{this.props.name}</div>;
  }
}
