import React, { useState, useEffect } from 'react';
import * as S from './UserProfile.style';
import { Link } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { IoMdAddCircle } from 'react-icons/io';
import { ProfileListData } from '../AddProfile/AddProfile';

export const ProfileData = [
  {
    id: 1,
    userName: '키즈',
    background: '#f7df80',
    // imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
  {
    id: 2,
    userName: '나니부',
    background: '#80b6f7',
    // imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
];

const UserProfile = () => {
  const [profileName, setProfileName] = useState({
    userName: '',
  });
  const { userName } = profileName;
  // const [profile, setProfile] = useState(context.submitProfile);
  // const [test, setTest] = useState(context);
  // console.log(test);
  //const [profile, setProfile] = useState(false);
  const data = localStorage.getItem('user');
  //console.log(data);

  const [test, setTest] = useState(ProfileData);
  const onCreateProflie = () => {
    const user = {
      userName: data,
      background: '#fff',
    };

    setTest([...test, user]);

    setProfileName({
      userName: '',
      background: '',
    });
  };

  useEffect(() => {
    onCreateProflie();
  }, [data]);

  //console.log(test);
  //console.log(profileName);
  return (
    <S.SelectWrapper>
      <S.ProfileContainer>
        <S.Title>프로필 관리</S.Title>
        <S.ImageContainer>
          {test.map((list, index) => {
            return (
              <ProfileBox
                key={index}
                id={list.id}
                userName={list.userName}
                background={list.background}
                imo={list.imo}
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
