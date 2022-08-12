import React from 'react';
import * as S from '../KidsList/KidsList.style';
import { KidsListData } from './KidsListData';
import { TopListData } from './KidsListData';
import { EduListData } from './KidsListData';

const KidsList = () => {
  return (
    <S.MainWrapper>
      {/* <S.SliderContent>
        <S.Category>당신이 원하는 다큐멘터리를 어디서나 시청하세요.</S.Category>
      </S.SliderContent> */}

      <S.ListContainer>
        <S.Category>아이를 위한 맞춤 콘텐츠 &nbsp;</S.Category>
        <S.ContentContainer>
          {KidsListData.map(({ id, index, backgroundColor, imo }) => {
            return (
              <S.ContentImg
                key={index}
                id={id}
                backgroundColor={backgroundColor}
              >
                <S.Imo>{imo}</S.Imo>
              </S.ContentImg>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>Top 100 &nbsp;</S.Category>
        <S.ContentContainer>
          {TopListData.map(({ id, index, backgroundColor, imo }) => {
            return (
              <S.ContentImg
                key={index}
                id={id}
                backgroundColor={backgroundColor}
              >
                <S.Imo>{imo}</S.Imo>
              </S.ContentImg>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>교육 &nbsp;</S.Category>
        <S.ContentContainer>
          {EduListData.map(({ id, index, backgroundColor, imo }) => {
            return (
              <S.ContentImg
                key={index}
                id={id}
                backgroundColor={backgroundColor}
              >
                <S.Imo>{imo}</S.Imo>
              </S.ContentImg>
            );
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default KidsList;
