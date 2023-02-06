import React, { useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';

import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from '../shared/firebase';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  });

  const [checkboxActive, setCheckboxActive] = useState(false);
  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [confirmVal, setConfirmVal] = useState(false);

  const { userName, userEmail, userPassword, userPasswordConfirm } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidLetter =
    userName.length >= 1 &&
    userEmail.length >= 1 &&
    userPassword.length >= 1 &&
    userPasswordConfirm.length >= 1;

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const nameValidation = event => {
    const inputVal = event.target.value;
    if (inputVal.length > 1) {
      setNameVal(true);
    } else if (inputVal.length <= 1) {
      setNameVal(false);
    }
  };

  const emailValidation = event => {
    const inputVal = event.target.value;
    if (emailReg.test(inputVal)) {
      setEmailVal(true);
    } else if (!emailReg.test(inputVal)) {
      setEmailVal(false);
    }
  };

  const passwordValidation = event => {
    const inputVal = event.target.value;
    if (passwordReg.test(inputVal)) {
      setPasswordVal(true);
    } else if (!passwordReg.test(inputVal)) {
      setPasswordVal(false);
    }
  };

  const confirmValidation = event => {
    const inputVal = event.target.value;
    userPassword === inputVal ? setConfirmVal(true) : setConfirmVal(false);
  };

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };

  const isActiveForm =
    emailReg.test(userEmail) &&
    passwordReg.test(userPassword) &&
    isValidLetter &&
    confirmVal &&
    checkboxActive;

  const onSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );
      window.location.replace('/');
    } catch (error) {
      if ('auth/invalid-email') {
        alert('이메일 형식을 지켜주세요.');
      } else if ('auth/email-already-in-use') {
        alert('이미 존재하는 이메일 입니다.');
      } else if ('auth/invalid-email') {
        alert('이메일 형식을 지켜주세요.');
      } else if ('auth / weak - password') {
        alert('비밀번호를 6자 이상 입력해주세요.');
      }
    }
  };

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.EntryContainer>
          <S.Title>회원가입</S.Title>
          {SignUpData.map((list, index) => {
            return (
              <S.InputWrapper key={index}>
                <InputContainer
                  key={index}
                  id={list.id}
                  name={list.name}
                  placeholder={list.placeholder}
                  text={list.text}
                  type={list.type}
                  message={list.message}
                  onChange={event => {
                    handleInput(event);
                    nameValidation(event);
                    emailValidation(event);
                    passwordValidation(event);
                    confirmValidation(event);
                  }}
                  nameVal={nameVal}
                  emailVal={emailVal}
                  passwordVal={passwordVal}
                  confirmVal={confirmVal}
                />
              </S.InputWrapper>
            );
          })}
          <S.ButtonContainer>
            <S.SignUpButton
              type="button"
              onClick={onSignUp}
              disabled={isActiveForm ? false : true}
              isActiveForm={isActiveForm}
            >
              회원가입
            </S.SignUpButton>
          </S.ButtonContainer>
        </S.EntryContainer>
        <S.CheckboxContainer>
          <S.PolicyAgree>
            <S.Policy
              type="checkbox"
              onClick={isCheckboxActive}
              isCheckboxActive={isCheckboxActive}
            />
            <S.CheckboxContent>
              개인정보 수집 이용에 동의합니다.
            </S.CheckboxContent>
          </S.PolicyAgree>
          <S.PersonalAgree>
            <S.Personal type="checkbox" />
            <S.CheckboxContent>마케팅 수신에 동의합니다.</S.CheckboxContent>
          </S.PersonalAgree>
        </S.CheckboxContainer>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUp;
