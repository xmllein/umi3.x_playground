import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
import Lists from './lists';
import { getLists } from '../../../services/search';
import Consumer from './consumer';

// 异步加载组件
import LazyLoad from '../../../components/LazyLoad';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello world',
      lists: [],
    };
  }

  handleDispatch = async (action) => {
    switch (action.type) {
      case 'changeText':
        this.setState({
          text: action.payload,
        });
        break;
      case 'changeLists':
        const res = await getLists(action.payload);
        this.setState({
          // lists: action.payload,
          lists: res.lists,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const house = {
      info: {},
    };
    return (
      <div>
        {house?.info2?.name}
        <SearchContext.Provider
          value={{ state: this.state, dispatch: this.handleDispatch }}
        >
          <Search />
          {/* <Lists /> */}
          <LazyLoad component={import('./lists')} delay={3000} />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}
