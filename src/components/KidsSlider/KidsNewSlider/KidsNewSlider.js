import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { KidsNewSliderData } from '../KidsNewSlider/KidsNewSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const KidsNewSlider = () => {
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
        {KidsNewSliderData &&
          KidsNewSliderData.map(({ id, background, imo }) => {
            return (
              <SliderBox key={id} background={background}>
                <Content>{imo}</Content>
              </SliderBox>
            );
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
const SliderBox = styled.div`
  height: 200px;
  background-color: ${({ background }) => background};
  border: 3px solid white;
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
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export default KidsNewSlider;
