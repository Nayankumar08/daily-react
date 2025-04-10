import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [click, setclick] = useState();
  const [count, setcount] = useState(0);

  // useEffect(()=>{
  //     console.log("we are kin use state");
  //     return(
  //         ()=>{
  //             console.log("return of use state");
  //         }
  //     )
  // },[click,count],[]);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <div>
      {/*       
      <button onClick={()=>setclick('subscribe')}>Subscribe</button><hr/><br/>
      <button onClick={()=>setclick('to')}>to</button><hr/><br/>
      <button onClick={()=>setclick('nayan.lifts')}>nayan.lifts</button>
      <h1>{click}</h1> */}
      <h1>{count}</h1>b<button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>----- v </button>
    </div>
  );
};
export default UseEffect;
