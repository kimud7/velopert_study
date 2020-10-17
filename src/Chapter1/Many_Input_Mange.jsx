import React, { useState } from 'react';

const Many_Input = () => {
    const [inputs, setinputs] = useState({
        name:'',
        nickname:''
    });

    const {name,nickname} = inputs; //값 꺼내오기

    const ReactChange = (e) => {
        const {name,value} = e.target;
        setinputs({
        // 불변성유지 Spread 문법
            ...inputs,
            [name] : value
        });
    };
     

    const onReset = () => {
        setinputs({
          name: '',
          nickname: '',
        })
      };
    return ( 
    <div>
        {/* name은 넣고자하는 변수이름 value는 변수에 넣고자 하는 값 */}
      <input name="name" placeholder="이름"  onChange={ReactChange} value={name} /> 
      <input name="nickname" placeholder="닉네임" onChange={ReactChange} value={nickname}  />
      <button onClick={onReset} >초기화</button>
      <div>
        <b>값: </b>
        {name} : ({nickname})
      </div>
    </div>
    );
}
 
export default Many_Input;