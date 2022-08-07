import React, { useState } from 'react';
import * as S from './SignIn.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignInData } from '../SignIn/SignInData';

const SignIn = () => {
  return (
    <S.SignInWrapper>
      <S.SignInContainer>
        <S.EntryContainer>
          <S.Title>로그인</S.Title>
          {SignInData.map((list, index) => {
            return (
              <InputContainer
                key={index}
                id={list.id}
                name={list.name}
                placeholder={list.placeholder}
                text={list.text}
                type={list.type}
              />
            );
          })}
          <S.ButtonContainer>
            <S.SignInButton>로그인</S.SignInButton>
          </S.ButtonContainer>
        </S.EntryContainer>
        <S.CheckboxContainer>
          <S.SaveInfo type="checkbox" />
          <S.CheckboxContent>로그인 정보 저장</S.CheckboxContent>
        </S.CheckboxContainer>
      </S.SignInContainer>
    </S.SignInWrapper>
  );
};

export default SignIn;
