import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log(`count: ${count}`);
  });

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};
