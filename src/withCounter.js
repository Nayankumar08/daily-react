import React, { useState } from "react";

const withCounter = (originalComponent) => {
  const EnhancedComponent = () => {
    const [count, setcount] = useState(0);
    const incrementCount = () => {
      setcount(count + 1);
    };
    return <originalComponent incrementCount={incrementCount} count={count} />;
  };
  return EnhancedComponent;
};
export default withCounter;
