import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="react-component">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
