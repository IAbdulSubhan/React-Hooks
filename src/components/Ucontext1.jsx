// passing data not by props by use context hook from head to let child 15
import React, { useState } from 'react';
import Ucontext3 from './Ucontext3';
import { CounterContext } from '../context/context';

const Ucontext1 = () => {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={counter}>
            <div>
                <h1>Hello from use Context hook</h1>
                <button onClick={() => {
                    setCounter(counter + 1);
                }}>Counter</button>
                <Ucontext3 />
            </div>
        </CounterContext.Provider>
    );
}

export default Ucontext1;
