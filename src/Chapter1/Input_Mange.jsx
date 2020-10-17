import React from 'react';
import { useState } from 'react';

const InputSample = () => {
    const [text,setText] = useState('');
    const ReactChange  = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
      setText('');
    };

    return ( 
        <div>
            <input onChange={ReactChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:{text} </b>
            </div>
        </div>
     );
}
 
export default InputSample;