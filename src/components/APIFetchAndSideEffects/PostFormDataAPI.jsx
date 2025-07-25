import React, { useState } from 'react'

function PostFormDataAPI() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        age:'',
        contact:'',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if(!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            console.log('post response', data);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
                setFormData({name:'', email:'', age:'', contact:''});
            }
    }

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

  return (
    <div>
        <h3>Post Form Data API</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
                />
            </div>
            <div>
                <label>Age:</label>
                <input 
                type='number'
                name='age'
                value={formData.age}
                onChange={handleChange}
                placeholder='Enter your age'
                required
                />
            </div>
            <div>
                <label>Contact:</label>
                <input 
                type='text'
                name='contact'
                value={formData.contact}
                onChange={handleChange}
                placeholder='Enter your contact number'
                required
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostFormDataAPI;