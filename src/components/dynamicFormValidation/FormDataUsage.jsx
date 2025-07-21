import React from 'react'
import DynamicForm from './DynamicForm';
import formDataSchema from './formDataSchema';

function FormDataUsage() {
    
  return (
    <div>
        <h3>Dynamic Form Data Usage</h3>
        <DynamicForm schema={formDataSchema}/>
    </div>
  )
}

export default FormDataUsage;