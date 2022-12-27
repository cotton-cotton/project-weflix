import styled from 'styled-components';

export const InputWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
`;
export const InputContainer = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.deepGray};
  font-size: ${({ theme }) => theme.small};
  border-radius: 5px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.lightGray};
    @media ${({ theme }) => theme.device.large} {
      font-size: 13px;
    }
    @media ${({ theme }) => theme.device.medium} {
      font-size: 12px;
    }
    @media ${({ theme }) => theme.device.small} {
      font-size: 8px;
    }
  }
  border-bottom: ${({ id, focus }) =>
    focus === id ? '2px solid #4E68B5' : null};
  @media ${({ theme }) => theme.device.large} {
    height: 45px;
  }
  @media ${({ theme }) => theme.device.medium} {
    height: 40px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 28px;
    margin-bottom: 10px;
  }
`;
export const InputMsg = styled.p`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  @media ${({ theme }) => theme.device.medium} {
    font-size: 10px;
  }
  @media ${({ theme }) => theme.device.small} {
    margin-bottom: 6px;
    font-size: 3px;
  }
`;
