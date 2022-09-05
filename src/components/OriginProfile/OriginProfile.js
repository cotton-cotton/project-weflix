import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserProfile from '../../pages/UserProfile/UserProfile';

const OriginProfile = ({ ProfileList, parentFuc }) => {
  const [data, setData] = useState(2);
  console.log(parentFuc);
  console.log(ProfileList);
  // const test = () => {
  //   parentFuc();
  // };
  // test();
  return <ProfileContainer />;
};

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 3px;
`;

export default OriginProfile;
