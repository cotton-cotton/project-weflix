import React, { useState } from 'react';
import * as S from '../Nav/Nav.style';
import LogoImg from '../../assets/logo3.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo src={LogoImg} alt="logo" />
        </Link>
      </S.LogoContainer>
      <S.LogInContainer>
        <Link to="/signup">
          <S.SignUp>SignUp</S.SignUp>
        </Link>
        <Link to="/signin">
          <S.SignIn>SignIn</S.SignIn>
        </Link>
      </S.LogInContainer>
    </S.Wrapper>
  );
};

export default Nav;
