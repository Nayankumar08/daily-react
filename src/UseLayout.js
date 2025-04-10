import React, { useEffect, useLayoutEffect } from "react";

const UseLayout = () => {
  useEffect(() => {
    console.log("use effect part");
  }, []);
  useEffect(() => {
    console.log("use effect part");
  }, []);
  useEffect(() => {
    console.log("use effect part");
  }, []);
  useLayoutEffect(() => {
    console.log("use layout effect part");
  }, []);

  return <div></div>;
};

export default UseLayout;
