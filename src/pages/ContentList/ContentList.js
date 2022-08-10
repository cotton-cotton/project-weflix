import React from 'react';
import * as S from '../ContentList/ContentList.style';
import ContentSlider from '../../components/ContentSlider/ContentSlider';
import { NatureListData } from './ContentListData';
import { FoodListData } from './ContentListData';
import { ArtListData } from './ContentListData';
import { VscTriangleRight } from 'react-icons/vsc';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.ListContainer>
        <S.Title>당신이 원하는 다큐멘터리를 어디서나 시청하세요.</S.Title>
        <S.Slider>
          <ContentSlider />
        </S.Slider>
      </S.ListContainer>

      <S.ListContainer>
        <S.Title>
          자연 &nbsp;
          <VscTriangleRight size="30" />
        </S.Title>
        <S.ContentContainer>
          {NatureListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Title>
          음식&nbsp;
          <VscTriangleRight size="30" />
        </S.Title>
        <S.ContentContainer>
          {FoodListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Title>
          예술&nbsp;
          <VscTriangleRight size="30" />
        </S.Title>
        <S.ContentContainer>
          {ArtListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
          ;
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default Main;
