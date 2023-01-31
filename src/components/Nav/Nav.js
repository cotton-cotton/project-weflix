import React, { useState, useEffect, useRef } from 'react';
import * as S from '../Nav/Nav.style';
import { Link } from 'react-router-dom';

import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';

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
  // useEffect(() => {
  //   const closeSignUpModal = event => {
  //     if (signUpModal && el.current && !el.current.contains(event.target)) {
  //       setSignUpModal(false);
  //     }
  //   };
  //   // const closeSignInModal = event => {
  //   //   if (signInModal && el.current && !el.current.contains(event.target)) {
  //   //     setSignInModal(false);
  //   //   }
  //   // };
  //   document.addEventListener('click', closeSignUpModal);
  //   // document.addEventListener('click', closeSignInModal);

  //   return () => {
  //     // document.removeEventListener('click', closeSignUpModal);
  //     // document.removeEventListener('click', closeSignInModal);
  //   };
  // }, [signUpModal, signInModal]);

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
      <S.LogInContainer ref={el}>
        {!userToken ? (
          <>
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
          </>
        ) : (
          <>
            <S.Logout onClick={() => onLogout()}>Logout</S.Logout>
            <Link to="/profile/user">
              <S.Profile>Profile</S.Profile>
            </Link>
          </>
        )}
      </S.LogInContainer>
    </S.Wrapper>
  );
};

export default Nav;
