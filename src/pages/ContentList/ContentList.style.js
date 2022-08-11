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
  padding: 0 20px;
  background-color: ${({ theme }) => theme.black};
  border-top: ${({ theme }) => theme.listBottomLine};
`;
export const SliderContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.black};
`;
export const Slider = styled.div``;
export const Category = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.bold};
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #fff;
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
  /* &:hover {
    width: 390px;
    height: 350px;
  } */
`;
