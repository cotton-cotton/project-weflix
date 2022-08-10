import React from 'react';
import * as S from '../SelectProfile/SelectProfile.style';
import { TbMoodKid } from 'react-icons/tb';

const SelectProfile = () => {
  return (
    <S.SelectWrapper>
      <S.SelectContainer>
        <S.Title>WEFLIX를 시청할 프로필을 선택하세요.</S.Title>
        <S.ImageContainer>
          <S.ProfileImg>
            <S.Image src="/images/assets/나.JPG" alt="profile" />
            <S.Name>나니부</S.Name>
          </S.ProfileImg>
          <S.ProfileImg>
            <S.Image src="/images/assets/목화.JPG" alt="profile" />
            <S.Name>목화</S.Name>
          </S.ProfileImg>
          <S.ProfileImg>
            <S.Image src="/images/assets/코코볼.JPG" alt="profile" />
            <S.Name>김코코</S.Name>
          </S.ProfileImg>
          <S.ProfileImg>
            <S.Image src="/images/assets/런던2.jpg" alt="profile" />
            <S.Name>진캐슬</S.Name>
          </S.ProfileImg>
          <S.ProfileImg>
            <S.Image src="/images/assets/진지.PNG" alt="profile" />
            <S.Name>진지</S.Name>
          </S.ProfileImg>
          <S.ProfileImg>
            <S.KidsImage>
              <TbMoodKid size="100" color="#7f7b7b" />
            </S.KidsImage>
            <S.Name>키즈</S.Name>
          </S.ProfileImg>
        </S.ImageContainer>
        <S.ModifyButton>프로필 관리</S.ModifyButton>
      </S.SelectContainer>
    </S.SelectWrapper>
  );
};

export default SelectProfile;
