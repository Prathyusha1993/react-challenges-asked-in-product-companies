import React, { useEffect, useState, useCallback } from 'react'

function FetchInfiniteScrollPagination() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // const fetchPosts = useCallback(async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    //         if(!response.ok) throw new Error(`Error fetching users: ${response.statusText}`);
    //         const data = await response.json();
    //         setPosts(prev => [...prev, ...data]);
    //         setHasMore(data.length > 0);
    //         setPage(prev => prev + 1);
    //     }catch(error){
    //         setError(error.message);
    //     }finally{
    //         setLoading(false);
    //     }
    // }, [page, loading, hasMore]);

    const fetchPosts = useCallback(async (pageNumber) => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`);
            if (!response.ok) throw new Error(`Error fetching users: ${response.statusText}`);
            const data = await response.json();
            setPosts(prev => [...prev, ...data]);
            setHasMore(data.length > 0 && pageNumber < 10);
            setPage(prev => prev + 1);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts(page);
    },[]);

   useEffect(() => {
    const handleScroll = () => {
        const nearButton = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
        if(nearButton && !loading && hasMore){
            fetchPosts(page);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
   }, [fetchPosts, loading, hasMore]);

  return (
    <div>
        <h3>Fetch Infinite Scroll Pagination</h3>
        <ul>
        {posts.map((post, index) => (
            <li key={`${post.id}-${index}`}>{post.id} - {post.title}</li>
        ))}
        </ul>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more data to laod.</p>}
    </div>
  )
}

export default FetchInfiniteScrollPagination;