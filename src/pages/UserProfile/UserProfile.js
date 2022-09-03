import React, { useState, useEffect } from 'react';
import * as S from './UserProfile.style';
import { Link } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { IoMdAddCircle } from 'react-icons/io';
import { BsPencilSquare } from 'react-icons/bs';
import { ProfileList } from '../AddProfile/AddProfile';

export let ProfileListData = [
  {
    id: 1,
    userName: '나니부',
    background: '#80b6f7',
    //imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
];
export let arr = [];
const UserProfile = () => {
  const getData = localStorage.getItem('user');

  if (getData) {
    const parsedData = JSON.parse(getData);
    ProfileListData.push(parsedData);
    arr = ProfileListData.flat();
  } else if (!getData) {
    arr = ProfileListData;
  }

  const preventProfile = event => {
    if (arr.length >= 3) {
      alert('프로필은 최대 3개까지 생성 가능합니다.');
      event.preventDefault();
    }
  };

  const onRemove = (event, userName) => {
    localStorage.removeItem('user');
    arr = arr.filter(el => el.userName !== userName);
  };

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
                onClick={event => onRemove(event, list.userName, index)}
                //imo={list.imo}
              />
            );
          })}
          <S.ProfileAdd>
            <Link to="/profile/add" style={{ textDecoration: 'none' }}>
              <S.Add onClick={preventProfile}>
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
