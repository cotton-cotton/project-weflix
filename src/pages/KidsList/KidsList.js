import React from 'react';
import * as S from './KidsList.style';
import { Link } from 'react-router-dom';
import KidsContentSlider from '../../components/KidsSlider/KidsContentSlider/KidsContentSlider';
import KidsNewSlider from '../../components/KidsSlider/KidsNewSlider/KidsNewSlider';
import KidsRecoSlider from '../../components/KidsSlider/KidsRecoSlider/KidsRecoSlider';
import KidsTopSlider from '../../components/KidsSlider/KidsTopSlider/KidsTopSlider';

const KidsList = () => {
  return (
    <S.MainWrapper>
      <S.SliderContent>
        <S.Category>아이들을 위한 맞춤 교육</S.Category>
        <S.Slider>
          <KidsContentSlider />
        </S.Slider>
      </S.SliderContent>

      <S.ListContainer>
        <Link to="/content/all" style={{ textDecoration: 'none' }}>
          <S.Category>지금 뜨는 컨텐츠 </S.Category>
        </Link>
        <S.ContentContainer>
          <KidsNewSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>맞춤 컨텐츠</S.Category>
        <S.ContentContainer>
          <KidsRecoSlider />
        </S.ContentContainer>
      </S.ListContainer>

      <S.ListContainer>
        <S.Category>TOP 100</S.Category>
        <S.ContentContainer>
          <KidsTopSlider />
        </S.ContentContainer>
      </S.ListContainer>
    </S.MainWrapper>
  );
};
export default KidsList;
