import React, { useRef } from 'react'


// Here use effect target is basically access dom element and we want refocus on the input that could be accessible using useref
const Uref = () => {
    // below 1 line is important which we have to set thsi property into the input 
    const inputRef = useRef(null);
    const Click = ()=>{
        console.log(inputRef.current.value);   // this line is to get the current value from input if user click on button
        // now let do code for foucus 
        inputRef.current.focus();
        // clear input
        inputRef.current.value = '';
        
    }
  return (
    <>
    <h1>Use Ref Hook</h1>
    <input type='text' placeholder='Enter the text here' ref={inputRef}/>
    <button onClick={Click}>Save Me</button>
    </>
  )
}

export default Uref
