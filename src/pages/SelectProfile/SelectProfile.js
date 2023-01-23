import React from 'react';
import * as S from '../SelectProfile/SelectProfile.style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';

import { useDispatch, useSelector } from 'react-redux';

const SelectProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileBox = useSelector(state => state.profile.profileList);

  return (
    <S.SelectWrapper>
      <S.SelectContainer>
        <S.Title>WEFLIX를 시청할 프로필을 선택하세요.</S.Title>
        <S.ImageContainer>
          {profileBox.map((list, index) => {
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
        </S.ImageContainer>

        <Link to="/profile/user">
          <S.ModifyButton>프로필 관리</S.ModifyButton>
        </Link>
      </S.SelectContainer>
    </S.SelectWrapper>
  );
};

export default SelectProfile;
