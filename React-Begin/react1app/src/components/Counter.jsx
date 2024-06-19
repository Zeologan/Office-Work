import React, { useState,useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
      console.log("Rendering.")
    }); 
  return (
    <div>
        <h3>Counter {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Update count </button>
    </div>
  )
}

export default Counter