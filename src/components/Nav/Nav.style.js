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
  width: 170px;
  height: 100px;
`;
export const LogInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
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
