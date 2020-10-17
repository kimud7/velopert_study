import React,{useRef} from 'react';
import Array_Mange_Create_User from './Array_Mange_Create_User';
import Array_Mange_UserList from './Array_Mange_UserList';

const Create_Appjs = () => {
    const users = [
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
      ];

    return ( 
      <>
        <Array_Mange_Create_User />
        <Array_Mange_UserList users={users}/>
      </>
     );
}
 
export default Create_Appjs;