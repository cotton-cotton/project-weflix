import styled from 'styled-components';

export const SelectWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.black};
`;
export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  @media ${({ theme }) => theme.device.large} {
    height: 50%;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 40%;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 30%;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.medium};
  }
`;
export const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OriginProfileBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: teal;
`;
export const ProfileAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background-color: ${({ name, theme }) =>
    name === '키즈' ? '#f7df80' : theme.mainBlue};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 10px black;
  }
`;
export const Name = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  text-align: center;
  @media ${({ theme }) => theme.device.large} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 12px;
  }
`;
export const Add = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 10px black;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 120px;
    height: 120px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 100px;
    height: 100px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
    height: 80px;
  }
`;
export const RegisterButton = styled.button`
  width: 80px;
  height: 40px;
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 60px;
    height: 30px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
    height: 22px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    height: 16px;
    font-size: 12px;
  }
`;
