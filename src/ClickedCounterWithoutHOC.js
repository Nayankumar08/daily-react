import React from "react";
import withCounter from "./withCounter";
const ClickedCounterWithoutHOC = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>+</button>

      <h1>{props.count}</h1>
    </div>
  );
};

export default withCounter(ClickedCounterWithoutHOC);
