import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [welcomeMsg, setWelcomeMsg] = useState('');

  useEffect(() => {
    setWelcomeMsg('Welcome to the counter app');
  }, []);

  const onClickHandler = () => {
    setWelcomeMsg('Do you like it?');
    setCount(count + 1);
  };

  return (
    <div className="react-component">
      <p>{welcomeMsg}</p>
      <p>You clicked {count} times</p>
      <button onClick={onClickHandler}>Click me!</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
