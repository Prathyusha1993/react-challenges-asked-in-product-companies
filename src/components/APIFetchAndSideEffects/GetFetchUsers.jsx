import React, { useEffect, useState } from 'react'

function GetFetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) throw new Error(`Error fetching users: ${response.statusText}`);
                const data = await response.json();
                setUsers(data);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    if(users.length === 0) return <div>no users found.</div>

  return (
    <div>
        <h3>Get Fetch Users</h3>
        {users.map((user) => (
            <div key={user.id}>
                <h4>Name: {user.name} - <span>Email: {user.email}</span></h4>
            </div>
        ))}
    </div>
  )
}

export default GetFetchUsers;