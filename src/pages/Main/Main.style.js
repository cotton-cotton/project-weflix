import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  color: ${({ theme }) => theme.white};
`;
export const IntroContainer = styled.section``;
export const Background = styled.div`
  width: 100%;
  height: 800px;
  @media ${({ theme }) => theme.device.large} {
    height: 700px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 500px;
  }
`;
export const BackImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 30%;
  left: 30%;
  width: 700px;
  height: 370px;
  text-align: center;
  @media ${({ theme }) => theme.device.large} {
    top: 30%;
    left: 20%;
    width: 600px;
  }
  @media ${({ theme }) => theme.device.medium} {
    top: 32%;
    width: 500px;
    height: 300px;
  }
  @media ${({ theme }) => theme.device.small} {
    top: 27%;
    width: 300px;
    height: 250px;
  }
`;
export const Title = styled.p`
  font-size: ${({ theme }) => theme.huge};
  font-weight: 600;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 2.813rem;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 2.813rem;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 1.625rem;
  }
`;
export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 1.563rem;
  }
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 1.375rem;
    line-height: 30px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 1.25rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.large};
  }
`;
export const Des = styled.div``;
export const letter = styled.p`
  font-size: 1.563rem;
  line-height: 45px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 1.375rem;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 1.25rem;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiLarge};
    line-height: 38px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.semiMedium};
    line-height: 33px;
  }
`;
export const Search = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
export const SearchBar = styled.input`
  width: 600px;
  height: 50px;
  margin-right: 10px;
  padding: 5px 0 0 10px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.mainBlue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.lightGray};
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 40px;
    &::placeholder {
      font-size: ${({ theme }) => theme.semiMedium};
    }
    @media ${({ theme }) => theme.device.small} {
      height: 30px;
      padding-bottom: 5px;
      &::placeholder {
        font-size: ${({ theme }) => theme.xSmall};
      }
    }
  }
`;
export const SearchButton = styled.button`
  width: 120px;
  height: 50px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.medium} {
    height: 40px;
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    height: 30px;
    font-size: ${({ theme }) => theme.xSmall};
  }
`;
export const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 650px;
  background-color: ${({ theme }) => theme.black};
  border-top: ${({ theme }) => theme.mainBottomLine};
  @media ${({ theme }) => theme.device.large} {
    height: 500px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 470px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 650px;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 1000px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 800px;
    height: 500px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 600px;
    height: 450px;
  }
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
    padding: 45px 0;
  }
`;
export const ListImg = styled.img`
  width: 500px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 10px 20px 30px rgba(0, 0, 0, 0.8);
  @media ${({ theme }) => theme.device.xLarge} {
    width: 400px;
    height: 380px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 300px;
    height: 280px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 250px;
    height: 230px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 220px;
    height: 160px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 450px;
    height: 480px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 430px;
    height: 280px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 300px;
    height: 230px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 220px;
    height: 160px;
  }
`;
export const ListTitle = styled.p`
  font-size: ${({ theme }) => theme.huge};
  font-weight: ${({ theme }) => theme.bold};
  line-height: 80px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 2.5rem;
    line-height: 60px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.xLarge};
    line-height: 45px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 1.563rem;
    line-height: 40px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.medium};
    line-height: 25px;
  }
`;
export const ListSubTitle = styled.p`
  font-size: ${({ theme }) => theme.xLarge};
  font-weight: ${({ theme }) => theme.normal};
  line-height: 45px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 1.563rem;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.large};
    line-height: 30px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.medium};
    line-height: 25px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
    line-height: 20px;
  }
`;
