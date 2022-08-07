import styled from 'styled-components';

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 480px;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.black};
`;
export const EntryContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 70%;
  margin-bottom: 20px;
`;
export const Title = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.large};
`;
export const ButtonContainer = styled.div``;
export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.medium};
  letter-spacing: 1px;
  border-radius: 5px;
  border: none;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;
export const SaveInfo = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  border: none;
  accent-color: ${({ theme }) => theme.middleGray};
`;
export const CheckboxContent = styled.p`
  color: ${({ theme }) => theme.lightGray};
`;
