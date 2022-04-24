import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const decreaseCounter = () => setCounter((previous) => previous - 1);
  const increaseCounter = () => setCounter((previous) => previous + 1);

  return (
    <div className="z-0">
      <button className="btn rounded" onClick={decreaseCounter}>
        -
      </button>
      <span className="counter inline-block min-w-[3rem]">{counter}</span>
      <button className="btn rounded" onClick={increaseCounter}>
        +
      </button>
    </div>
  );
}
