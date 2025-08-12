import React, {useState} from 'react'

function ToggleShowHideComp() {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(prev => !prev);
    }
  return (
    <div>
        <h3>Toggle Show Hide Component</h3>
        <button onClick={toggleShow}>{show ? 'Hide' : 'Show'}</button>
        {show && (<p>This is a content to show or hide.</p>)}
    </div>
  )
}


export default ToggleShowHideComp;