import React from 'react';
import * as S from '../AddProfile/AddProfile.style';
import { RiStarSmileLine } from 'react-icons/ri';

const AddProfile = () => {
  return (
    <S.AddWrapper>
      <S.AddContainer>
        <S.AddBox>
          <S.TitleContainer>
            <S.Title>프로필 추가</S.Title>
            <S.SubTitle>
              WEFLIX를 시청할 다른 사용자를 등록하시려면 프로필을 추가하세요.
            </S.SubTitle>
          </S.TitleContainer>
          <S.ProfileContainer>
            <S.Image>
              <RiStarSmileLine size="80" color="#fff" />
            </S.Image>
            <S.Name type="text" placeholder="이름" />
            <S.CheckContainer>
              <S.KidsCheckbox type="checkbox" />
              <S.CheckContent>어린이인가요?</S.CheckContent>
            </S.CheckContainer>
          </S.ProfileContainer>
          <S.ButtonContainer>
            <S.Confirm type="button">완료</S.Confirm>
            <S.Cancel type="button">취소</S.Cancel>
          </S.ButtonContainer>
        </S.AddBox>
      </S.AddContainer>
    </S.AddWrapper>
  );
};

export default AddProfile;
