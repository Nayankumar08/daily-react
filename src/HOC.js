import React from "react";
import ClickedCounterWithoutHOC from "./ClickedCounterWithoutHOC";
import HoverCounterWithoutHOC from "./HoverCounterWithoutHOC";
const HOC = () => {
  return (
    <div>
      <ClickedCounterWithoutHOC />
      <HoverCounterWithoutHOC />
    </div>
  );
};

export default HOC;
