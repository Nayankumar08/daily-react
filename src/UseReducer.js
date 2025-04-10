import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "incr") {
    return { count: state.count + 1 };
  } else if (action.type === "decr") {
    return { count: state.count - 1 };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleclickinr = () => {
    dispatch({ type: "incr" });
  };
  const handleclickdecr = () => {
    dispatch({ type: "decr" });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleclickinr}>+</button>
      <button onClick={handleclickdecr}>- </button>
    </div>
  );
};
export default App;
