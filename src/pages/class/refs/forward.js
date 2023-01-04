import React, { Component, forwardRef } from 'react';

const InputeForward = forwardRef((props, ref) => {
  return (
    <div>
      姓名：
      <input type="text" ref={ref} />
    </div>
  );
});

export default InputeForward;
