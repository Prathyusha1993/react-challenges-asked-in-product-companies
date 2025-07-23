import React, { useState } from 'react'

function DynamicForm({ schema }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checked' ? checked : value
        }))
    }

    const renderFields = (field) => {
        switch(field.type){
            case 'text':
            case 'email':
            case 'tel':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input 
                        type={field.type}
                        onChange={handleChange}
                        name={field.name}
                        value={formData[field.name] || ''}
                        id={field.name}
                        required={field.required} />
                    </div>
                );
            case 'checkbox':
                return(
                    <div>
                        <label>
                            <input 
                            type={field.type}
                            name={field.name}
                            checked={formData[field.name] || false}
                            onChange={handleChange}
                            required={field.required} />
                            {field.label}
                        </label>
                    </div>
                );
            case 'select':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <select 
                        name={field.name}
                        id={field.name}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        required={field.required}
                        >
                            <option value=''>Select an Option</option>
                            {field.options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                );
            case 'number':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input 
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required} />
                    </div>
                );
            case 'textarea':
                return(
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <textarea 
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}/>
                    </div>
                );
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        e.preventDefault();
        // onSubmitForm(formData);
        console.log('Form submitted with data:', formData);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {schema.fields.map((field) =>renderFields(field))}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default DynamicForm;