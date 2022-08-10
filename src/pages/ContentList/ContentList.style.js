import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  color: ${({ theme }) => theme.white};
`;
export const SliderContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.black};
`;
export const Title = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.bold};
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #fff;
`;
export const Slider = styled.div``;
export const Background = styled.div`
  width: 100%;
  height: 800px;
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
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
`;
export const Des = styled.div`
  line-height: 30px;
`;
export const letter = styled.p`
  font-size: ${({ theme }) => theme.medium};
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
`;
export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.black};
  border-top: ${({ theme }) => theme.mainBottomLine};
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContentImg = styled.img`
  width: 290px;
  height: 250px;
  padding-right: 12px;
  cursor: pointer;
  &:hover {
    width: 390px;
    height: 350px;
  }
`;
export const FirstImg = styled.img`
  width: 40%;
  height: 70%;
  border-radius: 20px;
  box-shadow: 0 10px 20px 30px rgba(0, 0, 0, 0.8);
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
`;
export const ListTitle = styled.p`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.huge};
  font-weight: ${({ theme }) => theme.bold};
`;
export const ListSubTitle = styled.p`
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  margin-bottom: 10px;
`;
