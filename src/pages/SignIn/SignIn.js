import React, { useState } from 'react';
import * as S from './SignIn.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignInData } from '../SignIn/SignInData';

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    userEmail: '',
    userPassword: '',
  });

  const { userEmail, userPassword } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidLetter = userEmail.length >= 1 && userPassword.length >= 1;

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const isActiveForm =
    emailReg.test(userEmail) && passwordReg.test(userPassword) && isValidLetter;

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
                onChange={handleInput}
              />
            );
          })}
          <S.ButtonContainer>
            <S.SignInButton
              type="button"
              disabled={isActiveForm ? true : false}
              isActiveForm={isActiveForm}
            >
              로그인
            </S.SignInButton>
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
