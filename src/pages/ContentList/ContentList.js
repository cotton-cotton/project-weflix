import React from 'react';
import * as S from '../ContentList/ContentList.style';
import { Link } from 'react-router-dom';
import ContentSlider from '../../components/ContentSlider/ContentSlider';
import NewSlider from '../../components/NewSlider/NewSlider';
import RecoSlider from '../../components/RecoSlider/RecoSlider';
import TopSlider from '../../components/TopSlider/TopSlider';

const ContentList = () => {
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
          <S.Category>지금 뜨는 컨텐츠 &nbsp;</S.Category>
        </Link>
        <S.ContentContainer>
          <NewSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>니부님을 위한 맞춤 컨텐츠&nbsp;</S.Category>
        <S.ContentContainer>
          <RecoSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>TOP 100&nbsp;</S.Category>
        <S.ContentContainer>
          <TopSlider />
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default ContentList;
