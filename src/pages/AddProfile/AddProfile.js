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
  // reduxToolkit 데이터 담은 변수
  const profileList = useSelector(state => state.profile.profileList);

  const [profileName, setProfileName] = useState({
    userName: '',
  });
  // 배경색 랜덤으로 뽑기

  //const [backgroundColor, setBackgroundColor] = useState('');

  //const [addProfile, setAddProfile] = useState([]);
  const [validMessage, setValidMessage] = useState(true);
  const [validButton, setValidButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // const onCheckedKids = event => {
  //   if (event) {
  //     setIsChecked(true);
  //     setBackgroundColor('#fff');
  //   } else {
  //     setIsChecked(false);
  //     setBackgroundColor('#f7df80');
  //   }
  // };
  // 구조분해할당
  const { userName } = profileName; // 객체 키값과 이름이 같아야 하는지?
  // const { background } = backgroundColor;
  const onProfileInput = event => {
    const { name, value } = event.target;
    //console.log(event.target.value);
    setProfileName({
      ...profileName, // 어떤 역할?
      [name]: value, // 왜 대괄호로 감싸는 걸까?
    });
    // console.log(name); //userName
    // console.log(value); //입력값
  };
  // 중복확인 버튼 클릭시 새로고침 막기
  const handleSubmit = event => {
    event.preventDefault();
  };
  // 이름글자 제한
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
    del: <TiDeleteOutline size="20" />,
  };

  const onDualChecking = () => {
    // 이름만 추출하기 중복확인때 사용
    const userNameList = profileList.map(el => el.userName);
    if (userNameList.includes(userName)) {
      alert('이미 존재하는 닉네임입니다.');
      setValidButton(false);
    } else {
      // 아이디 값이 안먹힘 ㅜ ㅜ
      // console.log(user);
      // nextId.current += 1;
      // setBackgroundColor({
      //   background: '',
      // });

      //setAddProfile([...addProfile, user]);
      //dispatch(profileActions.addProfile({ data: [...addProfile, user] }));
      // dispatch(profileActions.addProfile({ data: user }));
      alert('사용 가능한 닉네임입니다.');
      setValidButton(true);
      // setProfileName({
      //   userName: '',
      // });
    }
  };
  const onCreate = () => {
    if (validButton) {
      console.log(user);
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
              {/* <S.NamingBox> */}
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
              <S.DualCheck
                onClick={() => {
                  onDualChecking();
                }}
                validMessage={validMessage}
              >
                중복확인
              </S.DualCheck>
              {/* </S.NamingBox> */}
            </S.InputContainer>
            <S.KidsContainer>
              <S.KidsBox
                type="checkbox"
                // onChange={event => {
                //   onCheckedKids(event.target.checked);
                // }}
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
                onClick={() => {
                  onCreate();
                }}
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
