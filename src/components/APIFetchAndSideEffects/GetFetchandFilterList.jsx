import React, { useEffect, useState } from 'react'

function GetFetchandFilterList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const getUsersData = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok) throw new Error(`Error fetching users: ${response.statusText}`); 
            const data = await response.json();
            setUsers(data);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        getUsersData();
    }, []);

    const filetredUsers = users.filter(user =>  user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
        <h3>Get Fetch and Filter List</h3>
        <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {filetredUsers.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetFetchandFilterList;