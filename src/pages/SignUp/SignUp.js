import React, { useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  });
  const [focusValue, setFocusValue] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);

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

  const isConfirmPassword =
    inputValue.userPassword === inputValue.userPasswordConfirm;

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };

  const isActiveForm =
    emailReg.test(userEmail) &&
    passwordReg.test(userPassword) &&
    isValidLetter &&
    isConfirmPassword &&
    checkboxActive;

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.EntryContainer>
          <S.Title>회원가입</S.Title>
          {SignUpData.map((list, index) => {
            return (
              <S.testContainer key={index}>
                <InputContainer
                  key={index}
                  id={list.id}
                  name={list.name}
                  placeholder={list.placeholder}
                  text={list.text}
                  type={list.type}
                  message={list.message}
                  onChange={handleInput}
                  // onFocus={console.log('123')}
                  // onBlur={() => console.log('456')}
                />
                {/* {focusValue ? null : <S.test>{list.message}</S.test>} */}
              </S.testContainer>
            );
          })}
          <S.ButtonContainer>
            <S.SignUpButton
              type="button"
              disabled={isActiveForm ? true : false}
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
