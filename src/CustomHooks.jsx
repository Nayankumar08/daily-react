import React, { useEffect, useState } from 'react';
import useFetchCH from './useFetchCH';
const Fetch_data = () => {
  const [users]=useFetchCH()



  return (
    <div>
      <h1>Users List</h1>
      
      <ul>
        {
          users.map(user=>{
            return <li key={user.id}><a href="users.html_url">{user.login}</a></li>
          })
        }
      </ul>
    </div>
  );
};

export default Fetch_data;
