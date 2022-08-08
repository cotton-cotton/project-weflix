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
`;
export const LogInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12%;
`;
export const SignIn = styled.button`
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
`;
export const SignUpModal = styled.div`
  position: absolute;
  top: 10%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export const SignInModal = styled.div`
  position: absolute;
  top: 10%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
