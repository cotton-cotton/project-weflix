import React from 'react';
import styled from 'styled-components';

const ProfileBox = ({ key, id, userName, background, imo, del, onClick }) => {
  return (
    <ProfileBoxWrapper key={key}>
      <ProfileImg key={key} id={id} background={background}>
        <DeleteBtn onClick={onClick}>{del}</DeleteBtn>
        <Imo>{imo}</Imo>
      </ProfileImg>
      <Name>{userName}</Name>
    </ProfileBoxWrapper>
  );
};

const ProfileBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Imo = styled.div``;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background-color: ${({ background }) => background};
  border-radius: 10px;
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
const DeleteBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  outline: none;
  border: none;
  background: none;
  &:hover {
    transform: scale(1.4);
    cursor: pointer;
  }
`;
const Name = styled.p`
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

export default ProfileBox;
