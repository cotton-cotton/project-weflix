import React, { useState } from 'react';
import * as S from './SignIn.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignInData } from '../SignIn/SignInData';
import axios from 'axios';
import API from '../Config/Config';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../shared/firebase';

const SignIn = () => {
  const userToken = localStorage.getItem('token');
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userEmail: '',
    userPassword: '',
  });

  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

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
  // const handleData = () => {
  //   axios
  //     .post(API.SIGN_IN, {
  //       email: userEmail,
  //       password: userPassword,
  //     })
  //     .then(res => {
  //       window.location.replace('/profile/user');
  //       console.log(res.data.access);
  //       localStorage.setItem('token', JSON.stringify(res.data.access));
  //       console.log('true');
  //     })
  //     .catch(error => {
  //       alert(error);
  //       console.log('false');
  //     });
  // };

  const onLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );
      localStorage.setItem('token', JSON.stringify(userData.user.uid));

      alert(`환영합니다!`);
      window.location.replace('/profile/user');
    } catch (error) {
      alert('잘못된 정보입니다.');
    }
  };

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
                message={list.message}
                onChange={event => {
                  handleInput(event);
                  emailValidation(event);
                  passwordValidation(event);
                }}
                emailVal={emailVal}
                passwordVal={passwordVal}
              />
            );
          })}
          <S.ButtonContainer>
            <S.SignInButton
              type="button"
              onClick={() => onLogin()}
              disabled={isActiveForm ? false : true}
              isActiveForm={isActiveForm}
            >
              로그인
            </S.SignInButton>
          </S.ButtonContainer>
        </S.EntryContainer>
      </S.SignInContainer>
    </S.SignInWrapper>
  );
};

export default SignIn;
