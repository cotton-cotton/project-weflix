import React from 'react';
import * as S from '../ContentList/ContentList.style';
import { Link } from 'react-router-dom';
import ContentSlider from '../../components/ContentSlider/ContentSlider';
import { NatureListData } from './ContentListData';
import { FoodListData } from './ContentListData';
import { ArtListData } from './ContentListData';
import { VscTriangleRight } from 'react-icons/vsc';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.SliderContent>
        <S.Category>당신이 원하는 다큐멘터리를 어디서나 시청하세요.</S.Category>
        <S.Slider>
          <ContentSlider />
        </S.Slider>
      </S.SliderContent>

      <S.ListContainer>
        <Link to="/content/all" style={{ textDecoration: 'none' }}>
          <S.Category>
            자연 &nbsp;
            <VscTriangleRight size="30" />
          </S.Category>
        </Link>
        <S.ContentContainer>
          {NatureListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>
          음식&nbsp;
          <VscTriangleRight size="30" />
        </S.Category>
        <S.ContentContainer>
          {FoodListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>
          예술&nbsp;
          <VscTriangleRight size="30" />
        </S.Category>
        <S.ContentContainer>
          {ArtListData.map(({ id, index, src, alt }) => {
            return <S.ContentImg key={index} id={id} src={src} alt={alt} />;
          })}
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default Main;
