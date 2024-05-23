import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ueffect = () => {
    //     const [data,setData] = useState("");
    //     // when you added the [] in useffect hook only one time it will render the page mostly it take condition with in
    //     // lets cross verify it
    //     // lets attach it with counter increement
    //     const [counter, setCounter] = useState(0);
    //     useEffect(()=>{
    //      axios.get("https://jsonplaceholder.typicode.com/comments").then((reponse)=>{
    //         setData(reponse.data[0].email);
    //         console.log("API has been called successfully");
    //      })   
    //     }, [counter]);
    //   return (
    //     <>
    //     <h1>{counter}</h1>
    //     <button onClick={()=>{
    //         setCounter(counter+1)
    //     }}>Increment</button>
    //     <button disabled = {counter == 0} onClick={()=>{
    //         setCounter(counter-1)
    //     }}>Decrement</button>
    //     <h1>Hi here is your email: {data}</h1>

    //     </>
    //   )

    // ==============sir example==============


        const [counter, setCounter] = useState(0);
        const [name, setName] = useState("Abdul");
    
        useEffect(() => { // Corrected syntax of useEffect
            if (counter === 5) {
                setName("Mian");
                console.log(name);
            }
        }, [counter]); // Dependency array to rerun effect when counter changes
    
        return (
            <>
                <h1>{counter}</h1>
                <button onClick={() => {
                    setCounter(prevCounter => prevCounter + 1); // Use functional update to avoid stale state
                }}>Increment</button>
    
                <h1>{name}</h1>
            </>
        );
    };
    
    export default Ueffect;
    