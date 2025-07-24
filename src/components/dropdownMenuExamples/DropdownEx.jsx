import React, { useState } from 'react';
import './dropdown.css';

function DropdownEx({ items, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);

   const toggleDropdown = () =>{
    setIsOpen(prev => !prev);
    setFocusedIndex(0);
   }

   const handleKeyDown = (e) => {
    if(!isOpen) return;
    switch(e.key){
        case 'ArrowDown':
            e.preventDefault();
            setFocusedIndex(prev => (prev+1) % items.length);
            break;
        case 'ArrowUp':
            e.preventDefault();
            setFocusedIndex(prev => (prev - 1 + items.length) % items.length);
            break;
        case 'Enter':
            e.preventDefault();
            if(focusedIndex >= 0){
                onSelect(items[focusedIndex]);
                setIsOpen(false);
            }
            break;
        case 'Escape':
            e.preventDefault();
            setIsOpen(false);
            break;
        default:
            break;
    }
   }

   const handleClickOption = (index) => {
    onSelect(items[index]);
    setIsOpen(false);
   }
  return (
    <div className='dropdown'>
        <button 
            className='dropdown-button'
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
            aria-haspopup='true'
            aria-expanded={isOpen}
        >Select Option</button>
        {isOpen && (
            <ul className='dropdown-menu'>
                {items.map((item, index) => (
                    <li 
                        key={item.id}
                        value={item.value}
                        tablIndex={focusedIndex === index ? 0 : -1}
                        onKeyDown={handleKeyDown}
                        onClick={() => handleClickOption(index)}
                        className={`dropdown-item ${index === focusedIndex ? 'focused' : ''}`}
                        style={{backgroundColor: index === focusedIndex ? '#f0f0f0' : 'white',
                            padding: '8px 12px',
                            cursor: 'pointer'}}
                    >{item.label}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DropdownEx;