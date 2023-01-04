import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';
export default function (props) {
  // const [state, setState] = useState();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>user:</h2>
      <h2>user-id: {state.user.id}</h2>
      <h2>user-name:{state.user.name}</h2>
    </div>
  );
}
