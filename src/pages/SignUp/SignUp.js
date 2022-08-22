import React, { useEffect, useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';
import API from '../Config/Config';

import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ThemeConsumer } from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  });

  const { userName, userEmail, userPassword, userPasswordConfirm } = inputValue;

  const [focusValue, setFocusValue] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  //console.log(inputValue);
  const isValidLetter =
    userName.length >= 1 &&
    userEmail.length >= 1 &&
    userPassword.length >= 1 &&
    userPasswordConfirm.length >= 1;

  // const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  // const passwordReg = new RegExp(
  //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  // );

  // const isConfirmPassword =
  //   inputValue.userPassword === inputValue.userPasswordConfirm;

  // const isCheckboxActive = () => {
  //   setCheckboxActive(!checkboxActive);
  // };

  // const isActiveForm =
  //   emailReg.test(userEmail) &&
  //   passwordReg.test(userPassword) &&
  //   isValidLetter &&
  //   isConfirmPassword &&
  //   checkboxActive;

  const URL = 'http://172.30.1.8:3000/users/signup';

  const handleData = () => {
    axios
      .post(API.SIGN_UP, {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const handleFetch = () => {
  //   console.log('test');
  //   fetch(URL, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: inputValue.userName,
  //       email: inputValue.userEmail,
  //       password: inputValue.userPassword,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.message) {
  //         console.log('성공', result);
  //       } else {
  //         console.log('실패');
  //       }
  //     });
  // };
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
              onClick={handleData}
              // disabled={isActiveForm ? true : false}
              // isActiveForm={isActiveForm}
            >
              회원가입
            </S.SignUpButton>
          </S.ButtonContainer>
        </S.EntryContainer>
        <S.CheckboxContainer>
          <S.PolicyAgree>
            <S.Policy
              type="checkbox"
              // onClick={isCheckboxActive}
              // isCheckboxActive={isCheckboxActive}
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
