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
  align-items: center;
  height: 50%;
`;
export const Title = styled.p`
  margin-bottom: 45px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
`;
export const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 28%;
  height: 50%;
`;
export const ProfileImg = styled.div`
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
`;
export const RegisterButton = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 40px;
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
