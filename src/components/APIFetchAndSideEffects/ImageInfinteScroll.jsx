import React, { useEffect, useState } from 'react'

const ACCESS_KEY = '-jFNGzoP0uXmAbeYAqDtkymaVSQgIhS20j7XhKyt4ZQ'

function ImageInfinteScroll() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchImages = async () => {
        setLoading(true);
        try{
            const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_KEY}`);
            if(!response.ok) throw new Error(`Error fetching images: ${response.statusText}`);
            const data = await response.json();
            setImages(prev => [...prev, ...data]);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading){
            fetchImages();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [loading]);

  return (
    <div>
        <h3>Infinte Scroll of Images</h3>
        {images.map((image, index) => (
            <img key={image.id} style={{ width:'200px', height:'100px', objectFit:'cover', borderRadius:'8px', marginLeft:'10px', marginTop:'10px'}} src={image.urls.small} alt={image.alt_description || 'Unsplash'} />
        ))}
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading...</p>}
    </div>
  )
}

export default ImageInfinteScroll;