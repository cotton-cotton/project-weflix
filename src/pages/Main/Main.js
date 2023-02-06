import React from 'react';
import * as S from '../Main/Main.style';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.IntroContainer>
        <S.Background>
          <S.BackImg src="/images/main-background.jpeg" alt="background" />
        </S.Background>
        <S.Content>
          <S.Title>컨텐츠를 무제한으로</S.Title>
          <S.SubTitle>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </S.SubTitle>
          <S.Des>
            <S.letter>
              {
                '지금 바로 맞춤형 서비스를 체험해보세요\n원하는 영상을 언제든지 검색해보세요'
              }
            </S.letter>
          </S.Des>
          <S.Search>
            <S.SearchBar type="text" placeholder="영상제목 검색" />
            <S.SearchButton>검색하기 </S.SearchButton>
          </S.Search>
        </S.Content>
      </S.IntroContainer>
      <S.ListContainer>
        <S.ContentContainer>
          <S.InfoContainer>
            <S.ListTitle>TV로 즐기세요.</S.ListTitle>
            <S.ListSubTitle>
              {
                '스마트 TV, PlayStation, Xbox\nChromeCast, Apple TV, 블루레이 \n플레이어 등 다양한 디바이스에서 시청하세요.'
              }
            </S.ListSubTitle>
          </S.InfoContainer>
          <S.ListImg src="/images/신밧드의 모험.jpg" alt="list-img" />
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.ContentContainer>
          <S.ListImg src="/images/자이로드롭.jpg" alt="list-img" />
          <S.InfoContainer>
            <S.ListTitle>
              {'즐겨보는 컨텐츠를 저장해\n오프라인으로 시청하세요'}
            </S.ListTitle>
            <S.ListSubTitle>
              간편하게 저장하고 빈틈없이 즐겨보세요.
            </S.ListSubTitle>
          </S.InfoContainer>
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.ContentContainer>
          <S.InfoContainer>
            <S.ListTitle>{'다양한 디바이스에서\n시청하세요'}</S.ListTitle>
            <S.ListSubTitle>
              {
                '각종 영화와 시리즈를 스마트폰 태블릿 노트북\nTV에서 무제한으로 스트리밍하세요.\n추가요금이 전혀 없습니다.'
              }
            </S.ListSubTitle>
          </S.InfoContainer>
          <S.ListImg src="/images/도버.jpg" alt="list-img" />
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.ContentContainer>
          <S.ListImg src="/images/코코볼.JPG" alt="list-img" />
          <S.InfoContainer>
            <S.ListTitle>{'전용 프로필을\n만들어 보세요.'}</S.ListTitle>
            <S.ListSubTitle>
              {
                '자기만의 공간에서 좋아하는 캐릭터와 즐기는\n신나는 모험.\n이 특별한 경험을 느껴보세요.\n위플릭스 회원이라면 무료입니다.'
              }
            </S.ListSubTitle>
          </S.InfoContainer>
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};

export default Main;
