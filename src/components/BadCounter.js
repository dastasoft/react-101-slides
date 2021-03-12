import React from 'react';

const Counter = () => {
  const count = 0;

  return (
    <div className="react-component">
      <p>You clicked {count} times</p>
      <button onClick={() => (count += 1)}>Click me!</button>
      <button onClick={() => (count = 0)}>Reset</button>
    </div>
  );
};

export default Counter;
