import React from 'react';

function User({ user, onRemove, onToggle}) {
  return (
    <div>
      <b
       style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
       }}
       onClick={() => onToggle(user.id)}
      >{user.username}</b> 
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function Array_Mange_UserList({ users,onRemove, onToggle}) {
  return (
    <div>
      {users.map(user => (
        <User 
        user={user} 
        key={user.id} 
        onRemove={onRemove} 
        onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Array_Mange_UserList;