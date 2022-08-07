import styled from 'styled-components';

export const InputContainer = styled.div``;
export const InputName = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.white};
`;
export const Input = styled.input`
  width: 95%;
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
  }
  border-bottom: ${({ id, focus }) =>
    focus === id ? '2px solid #4E68B5' : null};
`;
