import React, { useEffect, useRef } from 'react'
import './modal.css';

function ModalComponent({ children, isOpen, onClose}) {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    const handleKeydown = (e) => {
        if(e.key === 'Escape'){
            onClose();
        }
    }

    const handleOverlayClick = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

    useEffect(() => {
        if(isOpen){
            document.addEventListener('keydown', handleKeydown);
            document.body.style.overflow = 'hidden';
        }else{
            document.removeEventListener('keydown', handleKeydown);
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.body.style.overflow = '';
        }
    }, [isOpen, onClose]);

    if(!isOpen) return null;


  return (
    <div ref = {modalRef} role='dialog' aria-modal='true' onClick={handleOverlayClick} className='modal-overlay'>
        <div ref={contentRef} className='modal-content slide-down'> 
            {children}
            <button onClick={onClose} className='close-button'>Close</button>
        </div>
    </div>
  )
}

export default ModalComponent;