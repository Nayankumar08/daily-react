import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UseState from "./UseState";
import "./App.css";
import UseEffect from "./UseEffect";
import Fetch_data from "./Fetch_data";
import MultipleReturn from "./MultipleReturn";
import Memo from "./Memo";
import A from "./A";
import B from "./B";
import C from "./C";
import UseReducer from "./UseReducer";
import Useref from "./Useref";
import CustomHooks from "./CustomHooks";
import UseLayout from "./UseLayout";
import UseTransition from "./UseTransition";
import HOC from "./HOC";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <UseState /> */}
    {/* <UseEffect /> */}
    {/* <Fetch_data/>
     <MultipleReturn/>
    <Memo/> */}
    {/* <A /> */}
    {/* <UseReducer /> */}
    {/* <Useref /> */}
    {/* <CustomHooks />
    <UseLayout /> */}
    {/* <UseTransition /> */}
    <HOC />
    {/* <B />
    <C /> */}
  </React.StrictMode>
);
