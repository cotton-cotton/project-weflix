import React, { useState, useEffect } from 'react';
import * as S from './UserProfile.style';
import { Link } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { IoMdAddCircle } from 'react-icons/io';
import { ProfileList } from '../AddProfile/AddProfile';
import { BsPencilSquare } from 'react-icons/bs';

export let ProfileListData = [
  {
    id: 1,
    userName: '나니부',
    background: '#80b6f7',
    imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
];

const UserProfile = () => {
  const [profileName, setProfileName] = useState({
    userName: '',
  });

  const data = localStorage.getItem('user');
  let list;
  let arr;
  if (data) {
    const parsedData = JSON.parse(data);
    list = parsedData;
    arr = ProfileListData.concat(list);
    // ProfileListData = ProfileListData.concat(list);
  } else if (!data) {
    arr = ProfileListData;
  }
  console.log(list);
  console.log(arr);

  return (
    <S.SelectWrapper>
      <S.ProfileContainer>
        <S.Title>프로필 관리</S.Title>
        <S.ImageContainer>
          {arr.map((list, index) => {
            return (
              <ProfileBox
                key={index}
                id={list.id}
                userName={list.userName}
                background={list.background}
                //imo={list.imo}
              />
            );
          })}
          <S.ProfileAdd>
            <Link to="/profile/add" style={{ textDecoration: 'none' }}>
              <S.Add>
                <IoMdAddCircle size="100" color="#7f7b7b" />
              </S.Add>
              <S.Name>프로필 추가</S.Name>
            </Link>
          </S.ProfileAdd>
        </S.ImageContainer>
        <Link to="/">
          <S.RegisterButton>완료</S.RegisterButton>
        </Link>
      </S.ProfileContainer>
    </S.SelectWrapper>
  );
};

export default UserProfile;
