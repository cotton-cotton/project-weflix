import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { RecoListData } from '../RecoSlider/RecoSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { ReactComponent as Next } from '../../assets/next.svg';
// import { ReactComponent as Prev } from '../../assets/prev.svg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const RecoSlider = () => {
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
        {RecoListData &&
          RecoListData.map(({ id, src, alt }) => {
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
const SliderImg = styled.img`
  width: 400px;
  height: 250px;
  padding: 0 8px;
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
export default RecoSlider;
