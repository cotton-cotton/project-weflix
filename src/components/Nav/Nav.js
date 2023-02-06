import React, { useState, useEffect, useRef } from 'react';
import * as S from '../Nav/Nav.style';
import { Link } from 'react-router-dom';

import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';

import { MdSettings } from 'react-icons/md';
import { ImList } from 'react-icons/im';

const Nav = () => {
  const userToken = localStorage.getItem('token');

  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const el = useRef();

  useEffect(() => {
    const closeSignUpModal = event => {
      if (signUpModal && el.current && !el.current.contains(event.target)) {
        setSignUpModal(false);
      }
    };
    const closeSignInModal = event => {
      if (signInModal && el.current && !el.current.contains(event.target)) {
        setSignInModal(false);
      }
    };
    document.addEventListener('click', closeSignUpModal);
    document.addEventListener('click', closeSignInModal);

    return () => {
      document.removeEventListener('click', closeSignUpModal);
      document.removeEventListener('click', closeSignInModal);
    };
  }, [signUpModal, signInModal]);

  const onLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    window.location.replace('/');
  };
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo src="/images/weflix-logo.png" alt="logo" />
        </Link>
      </S.LogoContainer>
      {!userToken ? (
        <S.LogInContainer ref={el}>
          <S.SignUp onClick={() => setSignUpModal(pre => !pre)}>
            SignUp
          </S.SignUp>
          <S.SignUpModal>{signUpModal ? <SignUp /> : null}</S.SignUpModal>
          <S.SignIn onClick={() => setSignInModal(pre => !pre)}>
            SignIn
          </S.SignIn>
          <S.SignInModal>
            {signInModal && !userToken ? <SignIn /> : null}
          </S.SignInModal>
        </S.LogInContainer>
      ) : (
        <S.LogoutContainer>
          <S.Logout onClick={() => onLogout()}>Logout</S.Logout>
          <Link to="/profile/select">
            <S.Profile>
              <ImList size="15" color="#babab8" />
            </S.Profile>
          </Link>
          <Link to="/profile/user">
            <S.Setting>
              <MdSettings size="25" color="#babab8" />
            </S.Setting>
          </Link>
        </S.LogoutContainer>
      )}
    </S.Wrapper>
  );
};

export default Nav;
