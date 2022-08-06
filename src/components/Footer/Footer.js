import React from 'react';
import * as S from '../Footer/Footer.style';
import { FaRegSmileWink } from 'react-icons/fa';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.TopContainer>
        <S.WeFlix>© 2022 WEFLIX</S.WeFlix>
        <S.Tel>질문이 있으신가요? 문의 전화: 022-080-7777</S.Tel>
      </S.TopContainer>
      <S.CenterContainer>
        <S.Column>
          <S.FirstRow>자주 묻는 질문</S.FirstRow>
          <S.SecondRow>개인정보</S.SecondRow>
        </S.Column>
        <S.Column>
          <S.FirstRow>고객 센터</S.FirstRow>
          <S.SecondRow>입사 정보</S.SecondRow>
        </S.Column>
        <S.Column>
          <S.FirstRow>계정</S.FirstRow>
          <S.SecondRow>위플릭스 지원 디바이스</S.SecondRow>
        </S.Column>
        <S.Column>
          <S.FirstRow>이용 약관</S.FirstRow>
          <S.SecondRow>문의 하기</S.SecondRow>
        </S.Column>
      </S.CenterContainer>
      <S.BottomContainer>
        <S.Title>위플릭스 대한민국</S.Title>
        <S.Intro>
          <FaRegSmileWink />
          &nbsp; Back-end: Jin Sung Park
        </S.Intro>
        <S.Intro>
          <FaRegSmileWink />
          &nbsp; Front-end: Na Eun Lee
        </S.Intro>
      </S.BottomContainer>
    </S.FooterWrapper>
  );
};
export default Footer;
