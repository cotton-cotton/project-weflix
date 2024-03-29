import styled from 'styled-components';

export const SelectWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
export const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
`;
export const Title = styled.p`
  margin-bottom: 45px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.xLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 1.25rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.large};
  }
`;
export const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const ProfileContainer = styled.div``;
export const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 10px black;
  }
`;
export const Name = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
`;
export const KidsImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border: 2px solid #7f7b7b;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 5px black;
  }
`;

export const ModifyButton = styled.button`
  width: 130px;
  height: 40px;
  margin-top: 40px;
  color: ${({ theme }) => theme.middleGray};
  font-size: ${({ theme }) => theme.large};
  font-weight: ${({ theme }) => theme.normal};
  border: 2px solid #7f7b7b;
  border-radius: 3px;
  background: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.large} {
    width: 100px;
    height: 40px;
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 75px;
    height: 30px;
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.small} {
    width: 65px;
    height: 25px;
    margin-top: 30px;
    font-size: ${({ theme }) => theme.xSmall};
  }
`;
