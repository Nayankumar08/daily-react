import React from "react";
import withCounter from "./withCounter";

const HoverCounterWithoutHOC = (props) => {
  return (
    <div>
      <button onMouseOver={props.incrementCount}>+</button>

      <h1>{props.count}</h1>
    </div>
  );
};

export default withCounter(HoverCounterWithoutHOC);
