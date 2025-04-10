import Chai1 from "./Chai1";
import React, { useState } from 'react'
import datas from './manifest.json'
const UseState = () => {
  const [data,setdata]=useState(datas);

    const handleremove=(itemid)=>{
      setdata(data.filter(item => item.id!==itemid))}
   
    const handleupdate=(itemid)=>{
      setdata(data.map(item => {
        if( item.id=== itemid){
          return{name:"new name"}
        }
        else{
          return item;
        }
         }))}
       


      return (

    <div>
      <ul>
        {
          
      data.map(item=>
        <li keys={item.id}>
        {item.name}
        <button onClick={()=>handleremove(item.id)}>remove</button>
        <button onClick={()=>handleupdate(item.id)}>update</button>
        
        </li>
         )
      }
      </ul>
    <button onClick={()=>setdata([])} >clear</button>
    <Chai1 />

    
    </div>
  )
}

export default UseState;

