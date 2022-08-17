import React, { useState, useContext } from 'react';
import * as S from './UserProfile.style';
import { Link } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { IoMdAddCircle } from 'react-icons/io';
import { BsPencilSquare } from 'react-icons/bs';
import { UserContext } from '../AddProfile/AddProfile';

const UserProfile = () => {
  const context = useContext(UserContext);
  console.log(context);
  // const [profile, setProfile] = useState(context.submitProfile);
  // const [test, setTest] = useState(context);
  // console.log(test);
  //const [profile, setProfile] = useState(false);

  return (
    <S.SelectWrapper>
      <S.ProfileContainer>
        <S.Title>프로필 관리</S.Title>
        <S.ImageContainer>
          <S.ProfileImg>
            <S.Image>
              <BsPencilSquare size="50" color="#fff" opacity="50%" />
            </S.Image>
            <S.Name>나니부</S.Name>
          </S.ProfileImg>
          <Link to="/content/list/kids" style={{ textDecoration: 'none' }}>
            <S.ProfileImg>
              <S.Image name="키즈">
                <BsPencilSquare size="50" color="#fff" opacity="50%" />
              </S.Image>
              <S.Name>키즈</S.Name>
            </S.ProfileImg>
          </Link>
          <ProfileBox />
          <S.ProfileImg>
            <Link to="/profile/add" style={{ textDecoration: 'none' }}>
              <S.Add>
                <IoMdAddCircle size="100" color="#7f7b7b" />
              </S.Add>
              <S.Name>프로필 추가</S.Name>
            </Link>
          </S.ProfileImg>
        </S.ImageContainer>
        <S.RegisterButton>완료</S.RegisterButton>
      </S.ProfileContainer>
    </S.SelectWrapper>
  );
};

export default UserProfile;
