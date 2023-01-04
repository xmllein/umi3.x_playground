import React, { Component } from 'react';
import { List } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Consumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchContext.Consumer>
          {({ state, dispatch }) => {
            return (
              <div>
                <h1
                  onClick={() =>
                    dispatch({
                      type: 'changeText',
                      payload: 'hello comsumer',
                    })
                  }
                >
                  consumer: {state.text}
                </h1>
                <List>
                  {state.lists.map((item, i) => (
                    <List.Item key={i}>{item}</List.Item>
                  ))}
                </List>
              </div>
            );
          }}
        </SearchContext.Consumer>
      </div>
    );
  }
}
