import React, { useContext } from 'react'
import {GreetContext} from './A'

const C = () => {
    const useContex=useContext(GreetContext);
  return (


    <h1> Greet:{useContex.greet}{useContex.greet2}</h1>

    
    //   <GreetContext.Consumer>
       
    //     {(val)=>{
    //         return(  <Greet2Context.Consumer>
    //             {
    //                 (val2)=>{
    //                     return <h1> Greet:{val}{val2}</h1>
    //                 }
    //             }
    //         </Greet2Context.Consumer>
    //         );
    //     }}
    //   </GreetContext.Consumer>
  
  )
}

export default C;