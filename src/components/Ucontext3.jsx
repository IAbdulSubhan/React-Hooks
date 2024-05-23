import React, { useContext } from 'react';
import { CounterContext } from '../context/context';

const Ucontext3 = () => {
    const counter = useContext(CounterContext);

    return (
        <div>
            <h1>Hello from use Context3 hook and value of counter is == {counter}</h1>
        </div>
    );
}

export default Ucontext3;
