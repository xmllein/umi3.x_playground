import React, { useReducer } from 'react';

const initialState = {
  isLogin: false,
  user: {
    id: '100',
    name: '张三',
  },
};

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
