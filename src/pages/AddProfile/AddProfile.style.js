import styled from 'styled-components';

export const AddWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.black};
`;
export const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 70%;
`;
export const AddBox = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const TitleContainer = styled.section`
  height: 20%;
`;
export const Title = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.middleGray};
  font-size: ${({ theme }) => theme.medium};
  letter-spacing: 1px;
`;
export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  height: 40%;
  border-top: 1px solid #494949;
  border-bottom: 1px solid #494949;
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 3px;
`;
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  border: 1px solid teal;
`;
export const CheckContainer = styled.button`
  display: flex;
  align-items: center;
`;
export const CheckContent = styled.p``;
export const Name = styled.input`
  width: 400px;
  height: 45px;
  margin-right: 10px;
  padding: 5px 0 0 10px;
  background-color: ${({ theme }) => theme.middleGray};
  border: none;
  outline: none;
  border-radius: 3px;
  &::placeholder {
    font-size: ${({ theme }) => theme.medium};
    color: ${({ theme }) => theme.lightGray};
  }
`;
export const Message = styled.p`
  margin-top: 5px;
  border: 1px solid white;
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.lightGray};
`;
export const KidsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const KidsCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: none;
  accent-color: ${({ theme }) => theme.middleGray};
`;
export const KidsContent = styled.p`
  color: ${({ theme }) => theme.lightGray};
`;
export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-top: 20px;
`;
export const Confirm = styled.button`
  width: 65px;
  height: 35px;
  font-size: 15px;
  text-align: center;
`;
export const Cancel = styled.button`
  width: 65px;
  height: 35px;
  color: ${({ theme }) => theme.middleGray};
  font-size: 15px;
  text-align: center;
  border: 1px solid #7f7b7b;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`;
