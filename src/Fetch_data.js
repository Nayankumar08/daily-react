import React, { useEffect, useState } from 'react';

const Fetch_data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
