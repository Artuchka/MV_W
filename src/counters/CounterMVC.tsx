import {FC, useState} from "react";
// ----- Model -----
interface CounterModel {
  count: number;
}

// ----- View -----
interface CounterViewProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterView: FC<CounterViewProps> = (props) => {
  const {
    count,
    increment,
    decrement,
  } = props
  return (
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
  );
};

// ----- Controller -----
const CounterController: FC = () => {
  const [model, setModel] = useState<CounterModel>({ count: 0 });

  const increment = () => {
    setModel({ ...model, count: model.count + 1 });
  };

  const decrement = () => {
    setModel({ ...model, count: model.count - 1 });
  };

  return (
      <CounterView count={model.count} increment={increment} decrement={decrement} />
  );
};

export default CounterController
