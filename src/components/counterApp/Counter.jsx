import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)} >+</button>
        <button onClick={() => setCount(prev => prev - 1)} disabled={count === 0}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter;