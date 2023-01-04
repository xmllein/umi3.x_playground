import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store';
export default function (props) {
  const [state, setState] = useState();

  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();

  const states = useStateHook('user');
  console.log(states);

  useEffect(() => {
    getUserAsync({ id: 1, username: 'hello' });
  }, []);

  const dispatch = useDispatchHook('user');
  const handleClick = () => {
    // getUserAsync({ id: 2, username: 'world' });
    dispatch({
      key: 'user',
      type: 'getUserAsync',
      payload: { id: 2, username: 'world' },
    });
  };

  return (
    <div>
      <h2>user: </h2>
      <h2>user-id: {id} </h2>
      <h2>username: {username} </h2>
      <button onClick={handleClick}>手动改变值</button>
    </div>
  );
}
