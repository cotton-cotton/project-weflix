import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { ContentSliderData } from '../ContentSlider/ContentSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ContentSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Wrapper>
      <ListSlider {...settings}>
        {ContentSliderData &&
          ContentSliderData.map(({ id, src, alt }) => {
            return <SliderImg key={id} src={src} alt={alt} />;
          })}
      </ListSlider>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;
const ListSlider = styled(Slider)`
  .slick-list {
  }

  .slick-slide div {
    cursor: pointer;
  }
`;
const SliderImg = styled.img`
  width: 400px;
  height: 250px;
  padding-right: 12px;
  @media ${({ theme }) => theme.device.large} {
    width: 320px;
    height: 170px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 100px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 70px;
  }
`;
export default ContentSlider;
