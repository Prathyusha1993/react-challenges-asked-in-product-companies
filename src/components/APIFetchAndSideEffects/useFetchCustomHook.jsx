import { useState, useEffect } from "react";

function useFetchCustomHook(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async() => {
            setLoading(true);
            setError(null);
            try{
                const response = await fetch(url);
                if(!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
                const data = await response.json();
                if(isMounted){
                    setPosts(data);
                }
            }catch(error){
                if(isMounted){
                    setError(error.message);
                }
            }finally{
                if(isMounted){
                    setLoading(false);
                }
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        }
    }, [url]);

    return {posts, loading, error};
};

export default useFetchCustomHook;


// example usage:
import React from 'react'

function CustomHookUsage(){
    const {posts, loading, error} = useFetchCustomHook('https://jsonplaceholder.typicode.com/posts');
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error:{error}</p>

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>Title: {post.title}</p>
                    <p>Email: {post.email}</p>
                </div>
            ))}
        </div>
    )
}