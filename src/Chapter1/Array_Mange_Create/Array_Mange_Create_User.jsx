import React from 'react';

const Array_Mange_Create_User = (username, email, onChange, onCreate) => {
    return ( 
      <div>
         <input
           name="username"
           placeholder="계정명"
           onChange={onChange}
           value={username}
         />
         <input
           name="email"
           placeholder="이메일"
           onChange={onChange}
           value={email}
         />
         <button onClick={onCreate}>등록</button>
      </div>
     );
}
 
export default Array_Mange_Create_User;