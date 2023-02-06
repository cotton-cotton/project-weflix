import React from 'react';
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

const SliderBox = ({ key, src, alt, title, rate, intro, width }) => {
  return (
    <SliderContainer>
      <Slider>
        <SliderContent>
          <SliderTitle>{title}</SliderTitle>
          <SliderRate>
            <AiFillStar />
            &nbsp;
            {rate}
          </SliderRate>
          <SliderIntro>{width > 768 ? intro : null}</SliderIntro>
        </SliderContent>
        <SliderImg key={key} src={src} alt={alt} />
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  height: 200px;
  @media ${({ theme }) => theme.device.large} {
    height: 180px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 120px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 80px;
  }
`;
const Slider = styled.div``;
const SliderContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 300px;
  height: 200px;
  padding: 50px 20px;
  z-index: 99;
  color: transparent;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media ${({ theme }) => theme.device.xLarge} {
    width: 250px;
    height: 180px;
    padding: 40px 20px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 180px;
    height: 130px;
    padding: 20px 20px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 130px;
    height: 100px;
    padding: 20px 20px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 80px;
    padding: 15px 20px;
  }
`;
const SliderImg = styled.img`
  position: relative;
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
const SliderTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 0.813rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
  }
`;
const SliderRate = styled.p`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 0.813rem;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.xSmall};
  }
`;
const SliderIntro = styled.p`
  font-size: 0.813rem;
  line-height: 20px;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 0.688rem;
    line-height: 15px;
  }
`;

export default SliderBox;
