import React, { useState } from 'react'

function DynamicForm({ schema }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

//     const renderFields = (field) => {
//         switch(field.type) {
//             case 'text':
//             case 'email':
//             case 'tel': 
//             return (
                
//             )
//         }
//    }
  return (
    <div></div>
  )
}

export default DynamicForm;