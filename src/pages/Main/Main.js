import React, { useState } from 'react';
import * as S from '../Main/Main.style';
import BackgroundImage from '../../assets/main-background.jpeg';
import FirstListImg from '../../assets/신밧드의 모험.jpg';
import SecondListImg from '../../assets/자이로드롭.jpg';
import ThirdListImg from '../../assets/도버.jpg';
import LastListImg from '../../assets/코코볼.JPG';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.IntroContainer>
        <S.Background>
          <S.BackImg src={BackgroundImage} alt="background" />
        </S.Background>
        <S.Content>
          <S.Title>다큐멘터리를 무제한으로</S.Title>
          <S.SubTitle>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </S.SubTitle>
          <S.Des>
            <S.letter>멤버십을 등록하거나 재시작하려면</S.letter>
            <S.letter>이메일 주소를 입력하세요</S.letter>
          </S.Des>
          <S.Search>
            <S.SearchBar type="text" placeholder="이메일 주소" />
            <S.SearchButton>시작하기 ></S.SearchButton>
          </S.Search>
        </S.Content>
      </S.IntroContainer>

      <S.ListContainer>
        <S.ContentContainer>
          <S.InfoContainer>
            <S.ListTitle>TV로 즐기세요.</S.ListTitle>
            <S.ListSubTitle>스마트 TV, PlayStation, Xbox,</S.ListSubTitle>
            <S.ListSubTitle>ChromeCast, Apple TV, 블루레이</S.ListSubTitle>
            <S.ListSubTitle>
              플레이어 등 다양한 디바이스에서 시청하세요.
            </S.ListSubTitle>
          </S.InfoContainer>
          <S.FirstImg src={FirstListImg} alt="list-img" />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.ContentContainer>
          <S.FirstImg src={SecondListImg} alt="list-img" />
          <S.InfoContainer>
            <S.ListTitle>즐겨보는 콘텐츠를 저장해</S.ListTitle>
            <S.ListTitle>오프라인으로 시청하세요.</S.ListTitle>
            <S.ListSubTitle>
              간편하게 저장하고 빈틈없이 즐겨보세요.
            </S.ListSubTitle>
          </S.InfoContainer>
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.ContentContainer>
          <S.InfoContainer>
            <S.ListTitle>다양한 디바이스에서</S.ListTitle>
            <S.ListTitle>시청하세요</S.ListTitle>
            <S.ListSubTitle>
              각종 영화와 시리즈를 스마트포느 태블리스 노트북
            </S.ListSubTitle>
            <S.ListSubTitle>
              TV에서 무제한으로 스트리밍하세요. 추가요금이 전혀
            </S.ListSubTitle>
            <S.ListSubTitle>없습니다.</S.ListSubTitle>
          </S.InfoContainer>
          <S.FirstImg src={ThirdListImg} alt="list-img" />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.ContentContainer>
          <S.FirstImg src={LastListImg} alt="list-img" />
          <S.InfoContainer>
            <S.ListTitle>전용 프로필을</S.ListTitle>
            <S.ListTitle>만들어 보세요.</S.ListTitle>
            <S.ListSubTitle>
              자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는
            </S.ListSubTitle>
            <S.ListSubTitle>모험. 이 특별한 경험을 느껴보세요.</S.ListSubTitle>
            <S.ListSubTitle>위플릭스 회원이라면 무료입니다.</S.ListSubTitle>
          </S.InfoContainer>
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default Main;
