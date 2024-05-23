import React, { useReducer, useState } from 'react';

// ============Use of mutiple use state hooks ========================
// const Ureducer = () => {
//   const [showPara, setShowPara] = useState(false);

//   const head1 = "Best for the multiple state Handling while useState and useReducer are equal";
//   const para1 = "One way is to use multiple useState hooks or use useReducer";

//   function next() {
//     setShowPara(true);
//   }
//   function back() {
//     // setShowPara(false)
//     setShowPara(!showPara) //works for getting  both text by one button 
//   }

//   return (
//     <div>
//       {showPara ? <h1>{head1}</h1> : <p>{para1}</p>}

//       <button onClick={next}>Next</button>
//       <button onClick={back}>Back</button>
//     </div>
//   );
// };
//==================Use Reducer Hook===========================
    // Reducer function
    function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
        return { count: state.count + 1, showText: state.showText };
        case 'TOGGLE_TEXT':
        return { count: state.count, showText: !state.showText };
        default:
        return state;
    }
    }

    const Ureducer = () => {
    // Initial state
    const initialState = { count: 0, showText: true,};

    // Use reducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
        {/* Access count from the state object */}
        <h1>{state.count}</h1>     
        <button disabled={state.count == 10} onClick={() => {
            // Dispatch multiple actions
            dispatch({ type: 'INCREMENT' });
            dispatch({ type: 'TOGGLE_TEXT' });
        }}>Click Me</button>

        {/* Render text based on showText state */}
        {state.showText && <p>TEXT IS HERE</p>}
        </div>
    );
    };

    export default Ureducer;
