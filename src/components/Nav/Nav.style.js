import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 80px;
  background-color: ${({ theme }) => theme.navBlack};
  @media ${({ theme }) => theme.device.small} {
    padding: 0 60px;
  }
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
`;
export const SignUp = styled.button`
  width: 120px;
  height: 40px;
  color: ${({ theme }) => theme.lightGray};
  background: none;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border: none;
  border-right: 2px solid ${({ theme }) => theme.mainBlue};
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 110px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 100px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 90px;
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
    font-size: ${({ theme }) => theme.semiMedium};
    border-right: none;
  }
`;
export const SignIn = styled.button`
  width: 120px;
  height: 40px;
  color: ${({ theme }) => theme.lightGray};
  background: none;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 110px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 100px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 90px;
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
    font-size: ${({ theme }) => theme.semiMedium};
  }
`;
export const LogoutContainer = styled.div`
  display: flex;
`;

export const Logout = styled.button`
  width: 120px;
  height: 40px;
  color: ${({ theme }) => theme.lightGray};
  background: none;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border: none;
  border-right: 2px solid ${({ theme }) => theme.mainBlue};
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 110px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 100px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 90px;
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
    font-size: ${({ theme }) => theme.semiMedium};
    border-right: none;
  }
`;
export const Profile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background: none;
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border: none;
  border-right: 2px solid ${({ theme }) => theme.mainBlue};
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 70px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 60px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    border-right: none;
  }
`;
export const Setting = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background: none;
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 70px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 60px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
  }
`;
export const SignUpModal = styled.div`
  position: absolute;
  top: 11%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    left: 32%;
  }
  @media ${({ theme }) => theme.device.medium} {
    left: 28%;
  }
  @media ${({ theme }) => theme.device.small} {
    left: 23%;
  }
`;
export const SignInModal = styled.div`
  position: absolute;
  top: 11%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  @media ${({ theme }) => theme.device.large} {
    left: 32%;
  }
  @media ${({ theme }) => theme.device.medium} {
    left: 28%;
  }
  @media ${({ theme }) => theme.device.small} {
    left: 25%;
  }
`;
