import React, { useState } from 'react'
import './accordion.css';

function AccordionEx({items}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(prev => prev === index ? null : index);
    }
  return (
    <div className='accordion'>
        {items.map((item) => (
            <div key={item.id} className='accordion-item'>
                <h3 className='accordion-header' onClick={() => handleToggle(item.id)}>
                    {item.title}
                    <span className='toggle-icon'>{activeIndex === item.id ? '-' : '+'}</span>
                </h3>
                {activeIndex === item.id && <p className='accordion-content'>{item.content}</p>}
            </div>
        ))}
    </div>
  )
}

export default AccordionEx;