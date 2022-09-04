import React, { useEffect, useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';
import API from '../Config/Config';

import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  });

  const [focusValue, setFocusValue] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [val, setVal] = useState(false);

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
  // 특수문자, 숫자, 소문자, 대문자 포함 8자 이상
  const isConfirmPassword = userPassword === userPasswordConfirm;

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };
  const isActiveForm =
    emailReg.test(userEmail) &&
    passwordReg.test(userPassword) &&
    isValidLetter &&
    isConfirmPassword &&
    checkboxActive;

  const nameValidation = event => {
    console.log(event.target.value);
    if (event.target.value.length > 1) {
      setVal(true);
    }
  };
  console.log(val);
  // const emailValidaiont = () => {
  //   emailReg.test(userEmail);
  // }

  // const passwordValidaiton = () => {
  //   passwordReg.test(userPassword);    }

  const handleSubmitData = () => {
    if (!isActiveForm) {
      alert('빈칸을 모두 채워주세요.');
    } else {
      axios
        .post(API.SIGN_UP, {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then(res => {
          //navigate('/signin');
          console.log(res);
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  // 왜 안될까?
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
                  onChange={event => {
                    handleInput(event);
                    nameValidation(event);
                  }}
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
              //onClick={handleSubmitData}
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
