import React from 'react'
import useModalCustom from './useModalCustom'
import ModalComponent from './ModalComponent';

function NestedModalUsage() {
    const {isOpen, openModal, closeModal} = useModalCustom();
    const {isOpen: isNestedOpen, openModal: openNestedModal, closeModal: closeNestedModal} = useModalCustom();
  return (
    <div>
        <h3>Nested Modal Component Usage</h3>
        <button onClick={openModal}>Open Modal</button>
        <ModalComponent isOpen={isOpen} onClose={closeModal}>
            <h3>Modal Content User Details</h3>
            <label>Name</label>
            <input type='text' />
            <label>Age</label>
            <input type='text' />
            <label>Contact No.</label>
            <input type='text' />
            <button onClick={openNestedModal}>Open Nested Modal</button>
            <button onClick={() => alert('submitted')}>Submit</button>

            <ModalComponent isOpen={isNestedOpen} onClose={closeNestedModal}>
                <h3>Nested Modal</h3>
                <p>This is a nested modal inside the modal component</p>
                <button onClick={closeNestedModal}>Close Nested</button>
            </ModalComponent>
        </ModalComponent>
    </div>
  )
}

export default NestedModalUsage