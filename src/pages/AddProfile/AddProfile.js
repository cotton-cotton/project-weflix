import React, { useState, useEffect, useRef } from 'react';
import * as S from '../AddProfile/AddProfile.style';
import ProfileData from '../../components/ProfileData/ProfileData';
import OriginProfile from '../../components/OriginProfile/OriginProfile';
import { Link } from 'react-router-dom';
import { RiStarSmileLine } from 'react-icons/ri';
import { Navigate, useNavigate } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../App/profileSlice';

const ProfileList = [];

const backgroundList = ['#80b6f7', '#f7d0b7', '#c3a2f2', '#80f7d9', '#f7b7f6'];

const AddProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileBox = useSelector(state => state.profile.profileList);

  const [profileName, setProfileName] = useState({
    userName: '',
  });

  const [backgroundColor, setBackgroundColor] = useState({
    background:
      backgroundList[Math.floor(Math.random() * backgroundList.length)],
  });

  const [addProfile, setAddProfile] = useState([]);
  const [validMessage, setValidMessage] = useState(true);

  const { userName } = profileName;
  const { background } = backgroundColor;
  const nextId = useRef(1);

  const onProfileInput = event => {
    const { name, value } = event.target;
    setProfileName({
      ...profileName,
      [name]: value,
    });
  };

  const isActiveButton = userName.length >= 2;

  const [users, setUsers] = useState(ProfileList);

  const onCreate = event => {
    const user = {
      id: nextId.current,
      userName: userName,
      background: background,
      imo: <BsPencilSquare size="50" color="#fff" opacity="50%" />,
      del: <TiDeleteOutline size="20" />,
    };

    nextId.current += 1;

    // //setUsers([...users, user]);
    // setUsers(user);

    setProfileName({
      userName: '',
    });
    setBackgroundColor({
      background: '',
    });

    setAddProfile([...addProfile, user]);
    dispatch(profileActions.addProfile({ data: user }));
    navigate('/profile/user');
  };
  const onValidMessage = event => {
    const nickName = event.target.value;
    if (nickName.length >= 2) {
      setValidMessage(true);
    } else if (nickName.length <= 1) {
      setValidMessage(false);
    }
    // userName.length >= 1 ? setValidMessage(true) : setValidMessage(false);
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
            <S.Image>
              <RiStarSmileLine size="80" color="#fff" />
            </S.Image>
            <S.InputContainer>
              <S.InputBox>
                <S.Name
                  types="text"
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
              <S.DualCheck
                onClick={() => {
                  onCreate();
                }}
              >
                중복확인
              </S.DualCheck>
            </S.InputContainer>
          </S.ProfileContainer>
          {/* <S.KidsContainer>
            <S.KidsCheckbox type="checkbox" />
            <S.KidsContent>어린이인가요?</S.KidsContent>
          </S.KidsContainer> */}
          <S.ButtonContainer>
            <S.Confirm
              type="button"
              disabled={userName.length <= 1 ? true : false}
              onClick={() => onCreate()}
              isActiveButton={isActiveButton}
            >
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
