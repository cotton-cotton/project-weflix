import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddProfile from '../../pages/AddProfile/AddProfile';

const ProfileData = () => {
  const ProfileListData = [
    {
      id: 1,
      userName: '나니부',
      background: '#80b6f7',
      //imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
    },
  ];
  const [test, setTest] = useState(ProfileListData);
  console.log('123');
  console.log(test);
  return (
    <>
      <AddProfile test={test} />
      {/* <UserProfile ProfileListData={ProfileListData} /> */}
    </>
  );
};

export default ProfileData;
