import React from 'react';
import * as S from '../DetailArray/DetailArray.style';
import { NaturePublicList } from './DetailArrayData';
import { NatureTopList } from './DetailArrayData';
import { NatureNormalList } from './DetailArrayData';
import { NatureNormalSecondList } from './DetailArrayData';

const DetailArray = () => {
  return (
    <S.MainWrapper>
      <S.ListContainer>
        <S.Category>최근 뜨는 콘텐츠 &nbsp;</S.Category>
        <S.ContentContainer>
          {NaturePublicList.map(({ id, index, src, alt, title }) => {
            return (
              <S.VideoContainer key={index}>
                <S.ContentImg key={index} id={id} src={src} alt={alt} />
                <S.Title>{title}</S.Title>
              </S.VideoContainer>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.Category>TOP 100&nbsp;</S.Category>
        <S.ContentContainer>
          {NatureTopList.map(({ id, index, src, alt, title }) => {
            return (
              <S.VideoContainer key={index}>
                <S.ContentImg key={index} id={id} src={src} alt={alt} />
                <S.Title>{title}</S.Title>
              </S.VideoContainer>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.Category>당신의 맞춤 컨텐츠&nbsp;</S.Category>
        <S.ContentContainer>
          {NatureNormalList.map(({ id, index, src, alt, title }) => {
            return (
              <S.VideoContainer key={index}>
                <S.ContentImg key={index} id={id} src={src} alt={alt} />
                <S.Title>{title}</S.Title>
              </S.VideoContainer>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
      <S.ListContainer>
        <S.ContentContainer>
          {NatureNormalSecondList.map(({ id, index, src, alt, title }) => {
            return (
              <S.VideoContainer key={index}>
                <S.ContentImg key={index} id={id} src={src} alt={alt} />
                <S.Title>{title}</S.Title>
              </S.VideoContainer>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};

export default DetailArray;
