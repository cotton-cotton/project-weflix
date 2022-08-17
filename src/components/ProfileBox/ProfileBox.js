import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../pages/AddProfile/AddProfile';
import UserList from '../../pages/AddProfile/UserList';

const ProfileBox = ({ users, onCreate, onChange, profileName }) => {
  const user = useContext(UserContext);
  console.log(user);
  //console.log(users);
  // return (
  //   <>
  //     {user.map((list, index) => {
  //       return (
  //         <ProfileBoxWrapper key={index}>
  //           <ProfileImg />
  //           <Name>{list.userName}</Name>
  //         </ProfileBoxWrapper>
  //       );
  //     })}
  //   </>
  // );
};

const ProfileBoxWrapper = styled.div``;
const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  background-color: teal;
`;
const Name = styled.p``;

export default ProfileBox;
