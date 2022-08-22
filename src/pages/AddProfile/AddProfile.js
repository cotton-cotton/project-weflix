import React, { useState, useEffect, useRef } from 'react';
import * as S from '../AddProfile/AddProfile.style';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { Link, useResolvedPath } from 'react-router-dom';
import { RiStarSmileLine } from 'react-icons/ri';
import { Navigate, useNavigate } from 'react-router-dom';

import { BsPencilSquare } from 'react-icons/bs';

export const ProfileListData = [
  {
    id: 1,
    userName: '키즈',
    background: '#f7df80',
    imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
  {
    id: 2,
    userName: '나니부',
    background: '#80b6f7',
    imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
  },
];

const backgroundList = ['#80b6f7', '#f7d0b7', '#c3a2f2', '#80f7d9', '#f7b7f6'];
const randomColor =
  backgroundList[Math.floor(Math.random() * backgroundList.length)];

const AddProfile = () => {
  const navigate = useNavigate();

  const [profileName, setProfileName] = useState({
    userName: '',
  });
  const [test, setTest] = useState([]);
  const [validMessage, setValidMessage] = useState(false);
  const { userName } = profileName;

  const onProfileInput = event => {
    const { name, value } = event.target;
    setProfileName({
      ...profileName,
      [name]: value,
    });
  };

  const [users, setUsers] = useState(ProfileListData);

  const nextId = useRef(3);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName: userName,
      background: randomColor,
      imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
    };

    setUsers([...users, user]);

    setProfileName({
      userName: '',
      background: '',
      imo: '',
    });
    nextId.current += 1;

    ProfileListData.push(user);
    setTest(profileName.userName);
    console.log(test);
    //navigate('/profile/user');
  };
  const onData = () => {
    localStorage.setItem('user', [...test]);
  };
  useEffect(() => {
    onData();
  }, [test]);
  //console.log(test);

  const onValidMessage = event => {
    // if (userName.length === 1) {
    //   setValidMessage(true);
    // } else if (userName.length >= 2) {
    //   setValidMessage(false);
    // } else if (userName.length === 0) {
    //   setValidMessage(false);
    // }
    userName.length < 2 || userName.length === 0
      ? setValidMessage(true)
      : setValidMessage(false);
  };
  //console.log(validMessage);
  //console.log(userName.length);

  return (
    <S.AddWrapper>
      <S.AddContainer>
        <S.AddBox>
          <S.TitleContainer>
            <S.Title>프로필 추가</S.Title>
            <S.SubTitle>
              WEFLIX를 시청할 다른 사용자를 등록하시려면 프로필을 추가하세요.
            </S.SubTitle>
          </S.TitleContainer>
          <S.ProfileContainer>
            <S.Image>
              <RiStarSmileLine size="80" color="#fff" />
            </S.Image>
            <S.InputContainer>
              <S.Name
                types="text"
                placeholder="이름"
                name="userName"
                onChange={event => {
                  onProfileInput(event);
                  onValidMessage(event);
                }}
                //onFocus={onValidMessage}
              />
              {validMessage === true ? (
                <S.Message>두 글자 이상 입력해주세요.</S.Message>
              ) : null}
            </S.InputContainer>
            <S.CheckContainer>
              <S.KidsCheckbox type="checkbox" />
              <S.CheckContent>어린이인가요?</S.CheckContent>
            </S.CheckContainer>
          </S.ProfileContainer>
          <S.ButtonContainer>
            <S.Confirm type="button" onClick={() => onCreate()}>
              완료
            </S.Confirm>
            <Link to="/profile/user">
              <S.Cancel type="button">취소</S.Cancel>
            </Link>
          </S.ButtonContainer>
        </S.AddBox>
      </S.AddContainer>
    </S.AddWrapper>
  );
};

export default AddProfile;
