import styled from 'styled-components';

export const SignUpWrapper = styled.div``;
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 680px;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.black};
  background-color: rgba(35, 35, 35, 0.9);
  @media ${({ theme }) => theme.device.large} {
    width: 400px;
    height: 600px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 350px;
    height: 530px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 280px;
    height: 380px;
  }
`;
export const EntryContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 70%;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.device.large} {
    width: 68%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 65%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 65%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 57%;
  }
`;
export const Title = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.large};
  @media ${({ theme }) => theme.device.large} {
    font-size: 25px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 16px;
  }
`;
export const ButtonContainer = styled.div``;
export const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.medium};
  letter-spacing: 1px;
  border-radius: 5px;
  border: none;
  background-color: ${({ isActiveForm }) =>
    isActiveForm ? '#4E68B5' : '#7f7b7b'};
  color: ${({ isActiveForm }) => (isActiveForm ? '#fff' : '#222')};
  cursor: ${({ isActiveForm }) => (isActiveForm ? 'pointer' : null)};
  @media ${({ theme }) => theme.device.large} {
    height: 45px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 40px;
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.small} {
    height: 28px;
    font-size: 10px;
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  @media ${({ theme }) => theme.device.large} {
    width: 68%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 65%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 57%;
    margin-top: 8px;
  }
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
  @media ${({ theme }) => theme.device.large} {
    width: 18px;
    height: 18px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 12px;
    height: 12px;
  }
`;
export const Personal = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  border: none;
  accent-color: ${({ theme }) => theme.middleGray};
  @media ${({ theme }) => theme.device.large} {
    width: 18px;
    height: 18px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 12px;
    height: 12px;
  }
`;
export const CheckboxContent = styled.p`
  color: ${({ theme }) => theme.lightGray};
  @media ${({ theme }) => theme.device.large} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 10px;
  }
`;
export const InputWrapper = styled.div``;
