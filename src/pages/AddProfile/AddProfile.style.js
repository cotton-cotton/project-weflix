import styled from 'styled-components';

export const AddWrapper = styled.main`
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
  width: 100%;
  height: 20%;
  @media ${({ theme }) => theme.device.large} {
    height: 18%;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 70px;
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
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 200px;
  padding: 15px 0;
  border-top: 1px solid #494949;
  border-bottom: 1px solid #494949;
  @media ${({ theme }) => theme.device.large} {
    width: 430px;
    height: 180px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 400px;
    height: 150px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 300px;
    height: 130px;
    padding-top: 20px;
  }
`;
export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 40%; */
  /* border: 1px solid teal; */
  @media ${({ theme }) => theme.device.small} {
    /* flex-direction: column; */
    height: 170px;
    margin-bottom: 20px;
    /* justify-content: space-between;
    align-items: flex-start; */
  }
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 3px;
  @media ${({ theme }) => theme.device.large} {
    width: 100px;
    height: 100px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 80px;
    height: 80px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 60px;
    height: 60px;
  }
`;
// export const NamingBox = styled.div`
//   display: flex;
// `;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  /* width: 78%; */
  /* height: 70px; */
  @media ${({ theme }) => theme.device.xLarge} {
    width: 300px;
  }
  @media ${({ theme }) => theme.device.large} {
    width: 250px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 230px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 160px;
  }
`;
export const Name = styled.input`
  height: 45px;
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
    font-size: ${({ theme }) => theme.xSmall};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.xSmall};
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
  margin-bottom: ${({ validMessage, theme }) => (validMessage ? 0 : '10px')};
  @media ${({ theme }) => theme.device.large} {
    width: 55px;
    height: 30px;
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 50px;
    height: 25px;
    font-size: ${({ theme }) => theme.xSmall};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.xSmall};
    -webkit-transform: scale(0.7);
    display: inline-block;
  }
`;
export const KidsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const KidsBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media ${({ theme }) => theme.device.medium} {
    width: 15px;
    height: 15px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 15px;
    height: 15px;
  }
`;
export const KidsTitle = styled.p`
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.lightGray};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 11px;
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
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 60px;
    height: 23px;
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    height: 18px;
    font-size: ${({ theme }) => theme.xSmall};
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
    font-size: ${({ theme }) => theme.small};
  }
  @media ${({ theme }) => theme.device.medium} {
    width: 60px;
    height: 23px;
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.small} {
    width: 40px;
    height: 18px;
    font-size: ${({ theme }) => theme.xSmall};
  }
`;
