import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { KidsContentSliderData } from './KidsContentSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const backgroundList = ['#80b6f7', '#f7d0b7', '#c3a2f2', '#80f7d9', '#f7b7f6'];

const ContentSlider = () => {
  // const background =
  //   backgroundList[Math.floor(Math.random() * backgroundList.length)];
  // console.log(background);
  let settings = {
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
      // 반응형 웹 구현 옵션
      {
        breakpoint: 900, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 5,
        },
      },
      // {
      //   breakpoint: 900, //화면 사이즈 768px일 때
      //   settings: {
      //     //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      //     slidesToShow: 7,
      //   },
      // },
    ],
  };

  return (
    <Wrapper>
      <ListSlider {...settings}>
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
  padding-right: 10px;
  background-color: ${({ background }) => background};
  /* @media ${({ theme }) => theme.device.xLarge} {
    width: 180px;
    height: 180px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 120px;
    height: 120px;
  } */
  /* @media ${({ theme }) => theme.device.medium} {
    width: 80px;
    height: 80px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 70px;
  } */
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export default ContentSlider;
