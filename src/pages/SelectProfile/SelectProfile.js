import React from 'react';
import * as S from '../SelectProfile/SelectProfile.style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileBox from '../../components/ProfileBox/ProfileBox';

const SelectProfile = () => {
  const navigate = useNavigate();
  const profileList = useSelector(state => state.profile.profileList);

  const isCheckedKids = kids => {
    kids ? navigate('/content/list/kids') : navigate('/content/list');
  };
  return (
    <S.SelectWrapper>
      <S.SelectContainer>
        <S.Title>WEFLIX를 시청할 프로필을 선택하세요.</S.Title>
        <S.ImageContainer>
          {profileList.map((list, index) => {
            return (
              <S.ProfileContainer
                key={index}
                onClick={() => isCheckedKids(list.kids)}
              >
                <ProfileBox
                  id={list.id}
                  userName={list.userName}
                  background={list.background}
                  imo={list.imo}
                />
              </S.ProfileContainer>
            );
          })}
        </S.ImageContainer>

        <Link to="/profile/user">
          <S.ModifyButton>프로필 관리</S.ModifyButton>
        </Link>
      </S.SelectContainer>
    </S.SelectWrapper>
  );
};

export default SelectProfile;
