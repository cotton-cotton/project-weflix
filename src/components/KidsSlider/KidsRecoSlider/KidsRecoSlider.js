import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { KidsRecoSliderData } from './KidsRecoSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const KidsRecoSlider = () => {
  const settings = {
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
    prevArrow: (
      <Prev>
        <IoIosArrowBack size="30" color="#5C7187" />
      </Prev>
    ),
    nextArrow: (
      <Next>
        <IoIosArrowForward size="30" color="#5C7187" />
      </Next>
    ),
  };

  return (
    <Wrapper>
      <ListSlider {...settings}>
        {KidsRecoSliderData &&
          KidsRecoSliderData.map(({ id, background, imo }) => {
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
    right: -3%;
  }
  @media ${({ theme }) => theme.device.medium} {
    right: -4%;
  }
  @media ${({ theme }) => theme.device.small} {
    right: -6%;
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
    left: -3%;
  }
  @media ${({ theme }) => theme.device.medium} {
    left: -4%;
  }
  @media ${({ theme }) => theme.device.small} {
    left: -6%;
  }
`;
const SliderBox = styled.div`
  height: 200px;
  padding-right: 10px;
  background-color: ${({ background }) => background};
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
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export default KidsRecoSlider;
