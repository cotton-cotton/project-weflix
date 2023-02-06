import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ContentSliderData } from './ContentSliderData';

const ContentSlider = () => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <ListSlider {...setting}>
        {ContentSliderData &&
          ContentSliderData.map(({ id, src, alt }) => {
            return <SliderList key={id} src={src} alt={alt} />;
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
    margin-right: 5px;
    cursor: pointer;
  }
`;
const SliderList = styled.img`
  width: 300px;
  height: 200px;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 250px;
    height: 180px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 180px;
    height: 130px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 130px;
    height: 100px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 80px;
  }
`;

export default ContentSlider;
