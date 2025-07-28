import React, { useEffect, useState } from 'react'
import axios from 'axios';

function InfiniteScrollAPIFetchAxios() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const fetchPosts = async (pageNumber) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`);
            const data = response.data;
            setItems(prev => [...prev, ...data]);
            setHasMore(data.length > 0 && pageNumber < 10);
            setPage(prev => prev + 1);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, []);

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading && hasMore){
            fetchPosts(page);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, [loading, hasMore, page]);
  return (
    <div>
        <h3>Infinite Scroll API Fetch Using Axios</h3>
        {items.map((item, index) => (
            <div key={item.id}>
                {item.id} - {item.title}
            </div>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No More data to load.</p>}
    </div>
  )
}

export default InfiniteScrollAPIFetchAxios;