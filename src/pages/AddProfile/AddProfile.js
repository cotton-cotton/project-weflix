import React, { createContext, useContext, useState, useRef } from 'react';
import * as S from '../AddProfile/AddProfile.style';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import { Link, useResolvedPath } from 'react-router-dom';
import { RiStarSmileLine } from 'react-icons/ri';
import UserList from '../AddProfile/UserList';

export const UserContext = createContext();

const AddProfile = () => {
  // const [profileName, setProfileName] = useState('');
  // const [submitProfile, setSubmitProfile] = useState();

  // const handleProfileInput = event => {
  //   setProfileName(event.target.value);
  // };
  // //console.log(profileName.name.length);

  // const handleProfileButton = () => {
  //   if (profileName.length <= 1) {
  //     alert('닉네임을 두 글자 이상 입력해주세요.');
  //   } else {
  //     setSubmitProfile(profileName);
  //   }
  // };
  // console.log(submitProfile);

  const [profileName, setProfileName] = useState({
    userName: '',
  });

  const { userName } = profileName;

  const onChange = event => {
    const { name, value } = event.target;
    setProfileName({
      ...profileName,
      [name]: value,
    });
  };
  console.log(profileName);

  const [users, setUsers] = useState([
    {
      id: 1,
      userName: '나니부',
    },
    {
      id: 2,
      userName: '키즈',
    },
  ]);

  const nextId = useRef(3);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName: userName,
    };

    setUsers([...users, user]);

    setProfileName({
      userName: '',
    });
    nextId.current += 1;
  };

  console.log(profileName);
  return (
    <S.AddWrapper>
      <S.AddContainer>
        <UserContext.Provider value={users}>
          <ProfileBox
          // userName={userName}
          // users={users}
          // onChange={onChange}
          // onCreate={onCreate}
          />
        </UserContext.Provider>
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
            <S.Name
              type="text"
              placeholder="이름"
              name="userName"
              onChange={onChange}
            />
            <S.CheckContainer>
              <S.KidsCheckbox type="checkbox" />
              <S.CheckContent>어린이인가요?</S.CheckContent>
            </S.CheckContainer>
          </S.ProfileContainer>
          <S.ButtonContainer>
            {/* <Link to="/profile/user"> */}
            <S.Confirm type="button" onClick={() => onCreate()}>
              완료
            </S.Confirm>
            {/* </Link> */}
            <Link to="/">
              <S.Cancel type="button">취소</S.Cancel>
            </Link>
          </S.ButtonContainer>
        </S.AddBox>
      </S.AddContainer>
    </S.AddWrapper>
  );
};

export default AddProfile;
