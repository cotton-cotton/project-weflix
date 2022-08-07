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

  const [checkboxActive, setCheckboxActive] = useState(false);

  const { userName, userEmail, userPassword, userPasswordConfirm } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };
  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.EntryContainer>
          <S.Title>회원가입</S.Title>
          {SignUpData.map((list, index) => {
            return (
              <InputContainer
                key={index}
                id={list.id}
                name={list.name}
                placeholder={list.placeholder}
                text={list.text}
                type={list.type}
                onchange={handleInput}
              />
            );
          })}
          <S.ButtonContainer>
            <S.SignUpButton
              disabled={isCheckboxActive ? false : true}
              checkboxActive={checkboxActive}
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
