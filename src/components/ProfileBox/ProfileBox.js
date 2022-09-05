import React from 'react';
import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

const ProfileBox = ({ key, id, userName, background, imo, onClick }) => {
  // const onRemove = data => {
  //   console.log(data);
  //   arr.filter(el => el.userName !== data);
  // };
  // console.log(arr);
  return (
    <ProfileBoxWrapper key={key}>
      <ProfileImg key={key} id={id} background={background}>
        <DeleteBtn onClick={onClick}>
          <TiDeleteOutline size="20" />
        </DeleteBtn>
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
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  text-align: center;
`;

export default ProfileBox;
