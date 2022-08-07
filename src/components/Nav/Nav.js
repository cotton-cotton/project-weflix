import React, { useState } from 'react';
import * as S from '../Nav/Nav.style';
import LogoImg from '../../assets/logo3.png';

const Nav = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <S.Logo src={LogoImg} alt="logo" />
      </S.LogoContainer>
      <S.LogInContainer>
        <S.SignUp>SignUp</S.SignUp>
        <S.SignIn>SignIn</S.SignIn>
      </S.LogInContainer>
    </S.Wrapper>
  );
};

export default Nav;
