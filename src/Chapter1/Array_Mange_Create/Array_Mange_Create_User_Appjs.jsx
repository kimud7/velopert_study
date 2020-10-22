import React,{useRef} from 'react';
import { useState } from 'react';
import Array_Mange_Create_User from './Array_Mange_Create_User';
import Array_Mange_UserList from './Array_Mange_UserList';

const Create_Appjs = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users,setUsers] = useState([
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ]);

    const nextId = useRef(4);

    const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers(users.concat(user));
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    };
  return ( 
    <>
      <Array_Mange_Create_User
       username={username}
       email={email}
       onChange={onChange}
       onCreate={onCreate} />
      <Array_Mange_UserList users={users}/>
    </>
   );
}
 
export default Create_Appjs;