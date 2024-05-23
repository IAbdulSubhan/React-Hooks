import React, { useState } from 'react'

// implemented hook for counter
const Ustate = () => {
  const [count,setCount] = useState(0);
  function increament(){
    setCount(count+1);
  }

  function decreament(){
    setCount(count-1);

  }
  return (
    <>
      <h1>Hello from Use State Hook</h1>
      <button onClick={increament}>Increment</button>
      <button disabled={count==0} onClick={decreament}>Decrement</button>
      <h1>{count}</h1>
    </>
  )
}

export default Ustate
