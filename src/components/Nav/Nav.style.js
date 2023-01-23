import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 60px;
  background-color: ${({ theme }) => theme.navBlack};
`;
export const LogoContainer = styled.div``;
export const Logo = styled.img`
  width: 180px;
  height: 175px;
  margin-top: 10px;
  @media ${({ theme }) => theme.device.small} {
    width: 140px;
    height: 120px;
  }
`;
export const LogInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12%;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 14%;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 20%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 25%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 35%;
  }
`;
export const SignIn = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.medium};
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 80px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: 12px;
  }
`;
export const SignUp = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 80px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: 12px;
  }
`;
export const SignUpModal = styled.div`
  position: absolute;
  top: 12%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    left: 32%;/
  }
  @media ${({ theme }) => theme.device.medium} {
    left: 28%;/
  }
  @media ${({ theme }) => theme.device.small} {
    left: 23%;/
  }
`;
export const SignInModal = styled.div`
  position: absolute;
  top: 10%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    top: 12%;
    left: 32%;
  }
  @media ${({ theme }) => theme.device.medium} {
    top: 12%;
    left: 28%;
  }
`;
