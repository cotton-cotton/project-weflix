import React, { useState } from 'react';
import * as S from '../Nav/Nav.style';
import LogoImg from '../../assets/logo3.png';
import { Link } from 'react-router-dom';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';

const Nav = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const openSignUpModal = () => {
    setSignUpModal(true);
  };
  const closeSignUpModal = () => {
    setSignUpModal(false);
  };

  const openSignInModal = () => {
    setSignInModal(true);
  };
  const closeSignInModal = () => {
    setSignInModal(false);
  };
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo src={LogoImg} alt="logo" />
        </Link>
      </S.LogoContainer>
      <S.LogInContainer>
        <S.SignUp onClick={openSignUpModal} onBlur={closeSignUpModal}>
          SignUp
        </S.SignUp>
        <S.SignUpModal>
          {signUpModal === true ? <SignUp /> : null}
        </S.SignUpModal>
        <S.SignIn onClick={openSignInModal} onBlur={closeSignInModal}>
          SignIn
        </S.SignIn>
        <S.SignInModal>
          {signInModal === true ? <SignIn /> : null}
        </S.SignInModal>
      </S.LogInContainer>
    </S.Wrapper>
  );
};

export default Nav;
