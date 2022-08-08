import styled from 'styled-components';

export const SelectWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.black};
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
`;
export const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 55%;
  height: 50%;
`;
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
  font-size: ${({ theme }) => theme.medium};
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
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  border: 2px solid #7f7b7b;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`;
