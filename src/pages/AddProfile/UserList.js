import React, { useState, useContext, createContext } from 'react';
import UserProfile from '../UserProfile/UserProfile';

export const UserContext = createContext();
export const test = [
  {
    id: 1,
    userName: '키즈',
    background: 'teal',
    imo: 'BsPencilSquare',
  },
  {
    id: 2,
    userName: '나니부',
    background: 'teal',
    imo: 'BsPencilSquare',
  },
  {
    id: 3,
    userName: 'liz',
    background: 'teal',
    imo: 'BsPencilSquare',
  },
];
console.log(test);
const List = () => {
  // const test = [
  //   {
  //     id: 1,
  //     username: 'velopert',
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //   },
  // ];
};
export default List;
// const UserList = ({ users }) => {
//   console.log(users);
//   const [test, setTest] = useState(users);
//   console.log(test);
//   const list = [
//     {
//       id: 1,
//       username: 'velopert',
//     },
//     {
//       id: 2,
//       username: 'tester',
//     },
//     {
//       id: 3,
//       username: 'liz',
//     },
//   ];
//   return <UserProfile test={test} />;
// };

// export default UserList;
