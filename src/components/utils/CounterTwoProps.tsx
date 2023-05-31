import React from 'react';

export interface CounterTwoProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const CounterTwo: React.FC<CounterTwoProps> = (props) => {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>decrement</button>
      )}
    </div>
  );
};

export default CounterTwo;
