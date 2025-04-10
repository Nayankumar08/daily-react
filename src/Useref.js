// import React,{useEffect, useState} from 'react'

// const Useref = () => {
//   const[count,setCount]=useState(0)
//   const handle=()=>{
//     setCount(count+1)
//     console.log(`clicked ${count} times`);
//   }
//   useEffect(()=>{
//     console.log("the component  is been rendered")
//   })
//   return (
//     <div>
//     <button   onClick={handle}>click me</button>
//     </div>
//   )
// }

// export default Useref

import React, { useEffect } from "react";

const Useref = () => {
  const inputEl = React.useRef(null);
  // useEffect(() => {
  //   inputEl.current.focus();
  // }, []);
  function handlefocus() {
    inputEl.current.style.backgroundColor = "black";
  }
  function handleblur() {
    inputEl.current.style.backgroundColor = "";
  }
  return (
    <div>
      <input
        ref={inputEl}
        onFocus={handlefocus}
        onBlur={handleblur}
        type="text"
      />
    </div>
  );
};

export default Useref;
