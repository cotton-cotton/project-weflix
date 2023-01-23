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
  width: 40%;
  height: 100%;
  @media ${({ theme }) => theme.device.large} {
    width: 48%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 40%;
  }
`;
export const TitleContainer = styled.section`
  width: 100%;
  height: 20%;
  @media ${({ theme }) => theme.device.large} {
    height: 18%;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 16%;
  }
`;
export const Title = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.big};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 2px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.large};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.medium};
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.small};
  }
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.middleGray};
  font-size: ${({ theme }) => theme.medium};
  letter-spacing: 1px;
  @media ${({ theme }) => theme.device.large} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 12px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 10px;
    line-height: 18px;
  }
`;
export const ProfileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
  border-top: 1px solid #494949;
  border-bottom: 1px solid #494949;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
    height: 35%;
    padding-top: 20px;
  }
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
  @media ${({ theme }) => theme.device.large} {
    width: 90px;
    height: 90px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70px;
    height: 70px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
`;
export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 40%;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
    height: 32%;
    margin-bottom: 20px;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  @media ${({ theme }) => theme.device.large} {
    width: 75%;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 90%;
  }
`;
export const Name = styled.input`
  width: 100%;
  height: 45px;
  margin-right: 10px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.middleGray};
  border: none;
  outline: none;
  border-radius: 3px;
  &::placeholder {
    font-size: ${({ theme }) => theme.medium};
    color: ${({ theme }) => theme.lightGray};
    @media ${({ theme }) => theme.device.large} {
      font-size: 15px;
    }
    @media ${({ theme }) => theme.device.medium} {
      font-size: 12px;
    }
    @media ${({ theme }) => theme.device.medium} {
      font-size: 7px;
    }
  }
  @media ${({ theme }) => theme.device.large} {
    height: 35px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 30px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 25px;
  }
`;
export const Message = styled.p`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.lightGray};
  @media ${({ theme }) => theme.device.large} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: 10px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 10px;
    -webkit-transform: scale(0.7);
    display: inline-block;
  }
`;
export const DualCheck = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.lightGray};
  border: none;
  outline: none;
  @media ${({ theme }) => theme.device.large} {
    width: 65px;
    height: 25px;
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
    height: 20px;
    font-size: 10px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 10px;
    -webkit-transform: scale(0.7);
    display: inline-block;
  }
`;
export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-top: 20px;
  @media ${({ theme }) => theme.device.large} {
    width: 135px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 130px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 90px;
  }
`;
export const Confirm = styled.button`
  width: 65px;
  height: 35px;
  font-size: 15px;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 3px;
  background-color: ${({ validButton }) =>
    validButton ? '#4E68B5' : '#7f7b7b'};
  color: ${({ validButton }) => (validButton ? '#fff' : '#222')};
  cursor: ${({ validButton }) => (validButton ? 'pointer' : null)};
  @media ${({ theme }) => theme.device.large} {
    width: 63px;
    height: 30px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 60px;
    height: 23px;
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    height: 18px;
    font-size: 10px;
  }
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
  @media ${({ theme }) => theme.device.large} {
    width: 63px;
    height: 30px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 60px;
    height: 23px;
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    height: 18px;
    font-size: 10px;
  }
`;
