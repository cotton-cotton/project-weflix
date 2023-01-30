import React from 'react';
import * as S from './ContentList.style';

import ContentSlider from '../../components/Slider/ContentSlider/ContentSlider';
import NewSlider from '../../components/Slider/NewSlider/NewSlider';
import RecoSlider from '../../components/Slider/RecoSlider/RecoSlider';
import TopSlider from '../../components/Slider/TopSlider/TopSlider';

const ContentList = () => {
  return (
    <S.MainWrapper>
      <S.SliderContent>
        <S.Category>당신이 원하는 컨텐츠를 어디서나 시청하세요</S.Category>
        <S.Slider>
          <ContentSlider />
        </S.Slider>
      </S.SliderContent>

      <S.ListContainer>
        <S.Category>지금 뜨는 컨텐츠</S.Category>
        <S.ContentContainer>
          <NewSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>맞춤 컨텐츠</S.Category>
        <S.ContentContainer>
          <RecoSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>TOP 100</S.Category>
        <S.ContentContainer>
          <TopSlider />
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default ContentList;
