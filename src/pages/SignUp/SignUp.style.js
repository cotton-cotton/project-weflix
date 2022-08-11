import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 680px;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.black};
  background-color: rgba(35, 35, 35, 0.9);
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
export const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50px;
  font-size: ${({ theme }) => theme.medium};
  letter-spacing: 1px;
  border-radius: 5px;
  border: none;
  background-color: ${({ isActiveForm }) =>
    isActiveForm ? '#4E68B5' : '#7f7b7b'};
  color: ${({ isActiveForm }) => (isActiveForm ? '#fff' : '#222')};
  cursor: ${({ isActiveForm }) => (isActiveForm ? 'pointer' : null)};
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const PolicyAgree = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
export const PersonalAgree = styled.span`
  display: flex;
  align-items: center;
`;
export const Policy = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  border: none;
  accent-color: ${({ theme }) => theme.middleGray};
`;
export const Personal = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  border: none;
  accent-color: ${({ theme }) => theme.middleGray};
`;
export const CheckboxContent = styled.p`
  color: ${({ theme }) => theme.lightGray};
`;
