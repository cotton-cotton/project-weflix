import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserProfile from '../../pages/UserProfile/UserProfile';

const ProfileData = ({ ProfileList, parentFuc }) => {
  const [data, setData] = useState(2);
  console.log(parentFuc);
  console.log(ProfileList);
  // const test = () => {
  //   parentFuc();
  // };
  // test();
  return <DataContainer />;
};

const DataContainer = styled.div``;

export default ProfileData;
