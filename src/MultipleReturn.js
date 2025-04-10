import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
    const[users,setusers]=useState([]);
    const[isloading,setisloading]=useState(true);
    const[error,seterror]=useState(null);
    useEffect(()=>{
        async function fetchusers() {
            try{
                const response=await fetch('https://api.github.com/users');
                const data=await response.json();
                setusers(data);
                setisloading(false);
            }
            catch(error){
                seterror(error);
                setisloading(false);
            }
        }
        fetchusers();
    })
    if(isloading){
        return<p>loading</p>
    }
    if(error){
        return <p>error</p>
    }
     
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            users.map(user=>{
                return <li key={user.id}>{user.login}</li>
            })
        }
      </ul>
    </div>
  )
}

export default MultipleReturn
