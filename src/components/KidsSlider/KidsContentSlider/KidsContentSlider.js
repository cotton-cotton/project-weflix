import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { KidsContentSliderData } from './KidsContentSliderData';
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
        {KidsContentSliderData &&
          KidsContentSliderData.map(({ id, background, imo }) => {
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
`;
const SliderBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ background }) => background};
  border: 3px solid white;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 180px;
    height: 180px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 150px;
    height: 150px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 120px;
    height: 120px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
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
export default ContentSlider;
