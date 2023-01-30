import styled from 'styled-components';

export const SelectWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 800px;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.black};
  @media ${({ theme }) => theme.device.large} {
    height: 700px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 600px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 500px;
  }
`;
export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.xLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 1.563rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.large};
  }
`;
export const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  text-align: center;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
  }
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
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 10px black;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 120px;
    height: 120px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 100px;
    height: 100px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 80px;
    height: 80px;
  }
`;
export const RegisterButton = styled.button`
  width: 80px;
  height: 40px;
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 60px;
    height: 30px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
    height: 22px;
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 45px;
    height: 20px;
    font-size: ${({ theme }) => theme.small};
  }
`;
