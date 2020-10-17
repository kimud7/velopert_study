import React, { useState } from 'react';


const Counter = (props) => { //컴포넌트는 항상 대문자를 하는 버릇을 들이자
   /* const numberState = useState(0);
    const number = numberState[0];
    const setNumber = numberState[1]; */
    const [Number, setNumber] = useState(0);

    const Calculate = (add) => {
        // setNumber(Number+1);
        setNumber(prevNumber => prevNumber+add);
    }
    const increase = () => {
        // setNumber(Number+1);
        setNumber(prevNumber => prevNumber+1);
    }
    const decrease = () => {
        // setNumber(Number-1);
        setNumber(prevNumber => prevNumber-1);
    }
    return (
        <div>
            <div> 카운터 </div>
            <h1>{Number}</h1>
            <button onClick={()=>Calculate(1)}>+</button>
            <button onClick={()=>Calculate(-1)}>-</button>
        </div>
      );
}

export default Counter;