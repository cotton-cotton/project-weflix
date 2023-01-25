import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { ContentSliderData } from './ContentSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    margin-right: 10px;
    cursor: pointer;
  }
`;
// const SliderImg = styled.img`
//   width: 400px;
//   height: 250px;
//   padding-right: 12px;
//   @media ${({ theme }) => theme.device.large} {
//     width: 320px;
//     height: 170px;
//   }
//   @media ${({ theme }) => theme.device.medium} {
//     height: 100px;
//   }
//   @media ${({ theme }) => theme.device.small} {
//     height: 70px;
//   }
// `;
const SliderImg = styled.img`
  height: 200px;
  @media ${({ theme }) => theme.device.xLarge} {
    height: 180px;
  }
  @media ${({ theme }) => theme.device.large} {
    height: 150px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 120px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 80px;
  }
`;
export default ContentSlider;
