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
`;
export const ImageContainer = styled.div`
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
  background-color: ${({ theme }) => theme.mainBlue};
  cursor: pointer;
`;
export const Name = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
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
  cursor: pointer;
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
