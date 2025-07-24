import React, { useState } from 'react'
import ModalEx from './ModalEx';

function ModalUsage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(prev => !prev);
    }

    const handleModalClose = () => {
        setIsModalOpen(prev => !prev);
    }

  return (
    <div>
        <h3>ModalUsage</h3>
        <button onClick={handleModalOpen}>Open Modal</button>
        <ModalEx isModalOpen={isModalOpen} onClose={handleModalClose}>
            <h3>This is Modal </h3>
            <p>Click outside to close the modal</p>
        </ModalEx>
    </div>
  )
}

export default ModalUsage;