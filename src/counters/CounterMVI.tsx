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

// ----- Intent -----
type CounterIntent = "INCREMENT" | "DECREMENT";

const createIntent = (intentType: CounterIntent) => (
    model: CounterModel
): CounterModel => {
  switch (intentType) {
    case "INCREMENT":
      return { ...model, count: model.count + 1 };
    case "DECREMENT":
      return { ...model, count: model.count - 1 };
    default:
      return model;
  }
};

// ----- Main Component -----
const CounterMVI: FC = () => {
  const [model, setModel] = useState<CounterModel>({ count: 0 });

  const handleIntent = (intentType: CounterIntent) => () => {
    const updatedModel = createIntent(intentType)(model);
    setModel(updatedModel);
  };

  return (
      <CounterView
          count={model.count}
          increment={handleIntent("INCREMENT")}
          decrement={handleIntent("DECREMENT")}
      />
  );
};
export default CounterMVI
