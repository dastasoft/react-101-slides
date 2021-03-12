import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const Display = () => {
  const value = useContext(CounterContext);
  return <p>You clicked {value} times</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="react-component">
      <CounterContext.Provider value={count}>
        <Display />
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </CounterContext.Provider>
    </div>
  );
};

export default Counter;
