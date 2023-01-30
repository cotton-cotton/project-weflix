import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TopListData } from '../TopSlider/TopSliderData';
import SliderBox from '../../SliderBox/SliderBox';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const TopSlider = () => {
  const setting = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    prevArrow: (
      <Prev>
        <IoIosArrowBack size="25" color="#5C7187" />
      </Prev>
    ),
    nextArrow: (
      <Next>
        <IoIosArrowForward size="25" color="#5C7187" />
      </Next>
    ),
  };

  return (
    <Wrapper>
      <ListSlider {...setting}>
        {TopListData &&
          TopListData.map(({ id, src, alt }) => {
            return <SliderBox key={id} src={src} alt={alt} />;
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

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;
const Next = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -2%;
  bottom: 10%;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    right: -4%;
  }
  @media ${({ theme }) => theme.device.medium} {
    right: -5%;
  }
  @media ${({ theme }) => theme.device.small} {
    right: -7%;
  }
`;
const Prev = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -2%;
  bottom: 10%;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    left: -3.5%;
  }
  @media ${({ theme }) => theme.device.medium} {
    left: -4.5%;
  }
  @media ${({ theme }) => theme.device.small} {
    left: -7%;
  }
`;

export default TopSlider;
