import React from 'react';
import styled from 'styled-components';

const SliderBox = ({
  key,
  src,
  alt,
  onMouseEnter,
  onMouseLeave,
  mouseIn,
  mouse,
}) => {
  return (
    <SliderContainer>
      <SliderImg
        key={key}
        src={src}
        alt={alt}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        mouseIn={mouseIn}
        mouse={mouse}
      />
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
const SliderImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default SliderBox;
