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
  justify-content: space-between;
  width: 210px;
  @media ${({ theme }) => theme.device.xLarge} {
    width: 200px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 180px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 160px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 130px;
  }
`;
export const SignIn = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
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
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: ${({ theme }) => theme.small};
  }
`;
export const SignUp = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 80px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: ${({ theme }) => theme.small};
  }
`;
export const Logout = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 80px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: ${({ theme }) => theme.small};
  }
`;
export const Profile = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 80px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 30px;
    font-size: ${({ theme }) => theme.small};
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
