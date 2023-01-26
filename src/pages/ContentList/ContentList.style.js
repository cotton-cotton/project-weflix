import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  color: ${({ theme }) => theme.white};
`;
export const SliderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.black};
`;
export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.black};
  border-top: ${({ theme }) => theme.listBottomLine};
  @media ${({ theme }) => theme.device.xLarge} {
    height: 320px;
  }
  @media ${({ theme }) => theme.device.large} {
    height: 260px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 200px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 150px;
  }
`;
export const SliderContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.black};
  @media ${({ theme }) => theme.device.xLarge} {
    height: 320px;
  }
  @media ${({ theme }) => theme.device.large} {
    height: 260px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 200px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 150px;
  }
`;
export const Slider = styled.div``;
export const Category = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.bold};
  /* -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #fff; */
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 25px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.medium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 14px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContentImg = styled.img`
  width: 300px;
  height: 250px;
  padding-right: 12px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 250px;
    height: 200px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 165px;
    height: 150px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 120px;
    height: 100px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 90px;
    height: 50px;
  }
`;
