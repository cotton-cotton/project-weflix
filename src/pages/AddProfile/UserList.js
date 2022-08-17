import React from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
    },
    {
      id: 2,
      username: 'tester',
    },
    {
      id: 3,
      username: 'liz',
    },
  ];
  // return (
  //   <div>
  //     <div>
  //       <b>{users[0].username}</b> <span>({users[0].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[1].username}</b> <span>({users[1].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[2].username}</b> <span>({users[1].email})</span>
  //     </div>
  //   </div>
  // );
}

export default UserList;
