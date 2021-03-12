import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState({ value: 0, isFresh: true });

  return (
    <div className="react-component">
      <p>You clicked {count.value} times</p>
      <p>I'm {count.isFresh ? 'fresh' : 'not fresh'}</p>
      <button
        onClick={() => setCount({ value: count.value + 1, isFresh: false })}
      >
        Click me!
      </button>
      <button onClick={() => setCount({ value: 0, isFresh: true })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
