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
  height: 520px;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.black};
  background-color: rgba(35, 35, 35, 0.9);
  @media ${({ theme }) => theme.device.large} {
    width: 400px;
    height: 440px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 350px;
    height: 400px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 280px;
    height: 320px;
  }
`;
export const EntryContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 250px;
  @media ${({ theme }) => theme.device.large} {
    width: 280px;
    height: 230px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 220px;
    height: 200px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 160px;
    height: 140px;
  }
`;
export const Title = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.xLarge};
  @media ${({ theme }) => theme.device.large} {
    font-size: 1.563rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.semiLarge};
  }
`;
export const ButtonContainer = styled.div``;
export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.large};
  letter-spacing: 1px;
  border-radius: 5px;
  border: none;
  background-color: ${({ isActiveForm }) =>
    isActiveForm ? '#4E68B5' : '#7f7b7b'};
  color: ${({ isActiveForm }) => (isActiveForm ? '#fff' : '#222')};
  cursor: ${({ isActiveForm }) => (isActiveForm ? 'pointer' : null)};
  @media ${({ theme }) => theme.device.large} {
    height: 45px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 40px;
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    height: 28px;
    font-size: ${({ theme }) => theme.xSmall};
  }
`;
