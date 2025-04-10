// import React, {useState} from 'react'
  
//   const Memo = () => {
//     const[count,setcount]=useState(0);
//     const[input,setinput]=useState("");
//     function handleinput(e){
//     setinput(e.target.value)
//  }
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setcount(count+1  )}>+</button>
//         <input type='text' value={input} onChange={handleinput}/> 
//         <h1>{input}</h1>
//       </div>
//     )
//   } 
  
//   export default Memo
    




//use memo//






import React, {useState} from 'react'
  
  const Memo = () => {
    const[count,setcount]=useState(0);
    const[
      
      input,setinput]=useState("");
    function handleinput(e){
    setinput(e.target.value)
 }
 function a(){
    for(let i=0;i<=1000000000000000000000;i++){}
        console.log("hewlloaschASCHIKSCSCCS")
 }
 a();
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1  )}>+</button>
        <input type='text' value={input} onChange={handleinput}/> 
        <h1>{input}</h1>
      </div>
    )
  } 
  
  export default Memo
    