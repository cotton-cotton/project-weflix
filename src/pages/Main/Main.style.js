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
  width: 40%;
  height: 370px;
  text-align: center;
  /* @media ${({ theme }) => theme.device.xLarge} {
    font-size: 42px;
  } */
  @media ${({ theme }) => theme.device.large} {
    width: 54%;
  }
  @media ${({ theme }) => theme.device.small} {
    top: 25%;
    height: 300px;
  }
`;
export const Title = styled.p`
  font-size: ${({ theme }) => theme.huge};
  font-weight: 600;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 45px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 45px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 40px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 26px;
  }
`;
export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 25px;
  }
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 22px;
    line-height: 30px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.medium};
  }
`;
export const Des = styled.div``;
export const letter = styled.p`
  font-size: 25px;
  line-height: 45px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 22px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 16px;
    line-height: 38px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
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
  width: 90%;
  height: 100%;
  margin-right: 10px;
  padding: 5px 0 0 10px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.mainBlue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.lightGray};
    font-size: ${({ theme }) => theme.medium};
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 80%;
    &::placeholder {
      font-size: ${({ theme }) => theme.small};
    }
    @media ${({ theme }) => theme.device.small} {
      height: 70%;
      &::placeholder {
        font-size: 10px;
      }
    }
  }
`;
export const SearchButton = styled.button`
  width: 20%;
  height: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.medium} {
    height: 80%;
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.small} {
    height: 70%;
    font-size: 10px;
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
  width: 65%;
  height: 100%;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 62%;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 65%;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
    padding: 45px 0;
  }
`;
export const ListImg = styled.img`
  width: 40%;
  height: 70%;
  border-radius: 20px;
  box-shadow: 0 10px 20px 30px rgba(0, 0, 0, 0.8);
  @media ${({ theme }) => theme.device.xLarge} {
    width: 45%;
    height: 60%;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 40%;
    height: 55%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 40%;
    height: 55%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 62%;
    height: 40%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 42%;
    height: 60%;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 55%;
    height: 55%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 55%;
    height: 55%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 64%;
    height: 53%;
  }
`;
export const ListTitle = styled.p`
  font-size: ${({ theme }) => theme.huge};
  font-weight: ${({ theme }) => theme.bold};
  line-height: 80px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: ${({ theme }) => theme.big};
    line-height: 60px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.large};
    line-height: 45px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 25px;
    line-height: 40px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const ListSubTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  line-height: 45px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.xLarge} {
    font-size: 22px;
  }
  @media ${({ theme }) => theme.device.large} {
    font-size: 18px;
    line-height: 30px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 15px;
    line-height: 25px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 11px;
  }
`;
