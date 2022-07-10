import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  actionDecrement,
  actionIncrement,
  useCounterValue,
} from '../../store/counter';

export default function Counter() {
  const counter = useCounterValue();
  const dispatch = useDispatch();
  const increaseCounter = () => {
    dispatch(actionIncrement());
  };
  const decreaseCounter = () => {
    dispatch(actionDecrement());
  };

  // Without the cleanup, the counter would be incremented twice.
  // Please read this section to learn more about that.
  // https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
  useEffect(() => {
    increaseCounter();
    return () => decreaseCounter();
  }, []);

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
