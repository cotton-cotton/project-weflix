import React, { useState, useEffect, useRef } from 'react';
import * as S from '../AddProfile/AddProfile.style';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../App/profileSlice';

import { RiStarSmileLine } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

const backgroundList = ['#80b6f7', '#f7d0b7', '#c3a2f2', '#80f7d9', '#f7b7f6'];

const AddProfile = () => {
  const dispatch = useDispatch();
  const profileList = useSelector(state => state.profile.profileList);

  const [profileName, setProfileName] = useState({
    userName: '',
  });

  const [validMessage, setValidMessage] = useState(true);
  const [validButton, setValidButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { userName } = profileName;
  const onProfileInput = event => {
    const { name, value } = event.target;
    setProfileName({
      ...profileName,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const onValidMessage = event => {
    const nickName = event.target.value;
    if (nickName.length >= 2) {
      setValidMessage(true);
    } else if (nickName.length <= 1) {
      setValidMessage(false);
    }
  };

  const nextId = useRef(1);

  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setBackgroundColor(
      isChecked
        ? '#f7df80'
        : backgroundList[Math.floor(Math.random() * backgroundList.length)]
    );
  }, [isChecked]);

  const user = {
    id: nextId.current,
    userName: userName,
    kids: isChecked,
    background: backgroundColor,
    imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
    del: <TiDeleteOutline size="15" />,
  };

  const onDualChecking = () => {
    const userNameList = profileList.map(el => el.userName);
    if (userNameList.includes(userName)) {
      alert('이미 존재하는 닉네임입니다.');
      setValidButton(false);
    } else {
      alert('사용 가능한 닉네임입니다.');
      setValidButton(true);
    }
  };
  const onCreateProfile = () => {
    if (validButton) {
      dispatch(profileActions.addProfile({ data: user }));
      nextId.current += 1;
    } else {
      alert('닉네임 중복 확인을 해주세요!');
    }
  };
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
            <S.InputContainer onSubmit={handleSubmit}>
              <S.Image>
                <RiStarSmileLine size="80" color="#fff" />
              </S.Image>
              <S.InputBox>
                <S.Name
                  type="text"
                  placeholder="이름"
                  name="userName"
                  onChange={event => {
                    onProfileInput(event);
                    onValidMessage(event);
                  }}
                  onFocus={() => setValidMessage(false)}
                  onBlur={() => setValidMessage(true)}
                />
                {validMessage === true ? null : (
                  <S.Message>두 글자 이상 입력해주세요.</S.Message>
                )}
              </S.InputBox>
              <S.DualCheck onClick={onDualChecking} validMessage={validMessage}>
                중복확인
              </S.DualCheck>
            </S.InputContainer>
            <S.KidsContainer>
              <S.KidsBox
                type="checkbox"
                onChange={event =>
                  event.target.checked
                    ? setIsChecked(true)
                    : setIsChecked(false)
                }
              />
              <S.KidsTitle>어린이인가요?</S.KidsTitle>
            </S.KidsContainer>
          </S.ProfileContainer>
          <S.ButtonContainer>
            <Link to="/profile/user">
              <S.Confirm
                type="button"
                disabled={validButton ? false : true}
                validButton={validButton}
                onClick={onCreateProfile}
              >
                완료
              </S.Confirm>
            </Link>
            <Link to="/profile/user">
              <S.Cancel type="submit">취소</S.Cancel>
            </Link>
          </S.ButtonContainer>
        </S.AddBox>
      </S.AddContainer>
    </S.AddWrapper>
  );
};

export default AddProfile;
