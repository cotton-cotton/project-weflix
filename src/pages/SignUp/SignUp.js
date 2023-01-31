import React, { useEffect, useState, useRef } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';
import API from '../Config/Config';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from '../../shared/firebase';

import SignIn from '../SignIn/SignIn';

const SignUp = () => {
  const [signUpModal, setSignUpModal] = useState(true);
  const [signModal, setSignModal] = useState(false);
  const el = useRef();

  // useEffect(() => {
  //   const closeSignInModal = event => {
  //     if (signModal && el.current && !el.current.contains(event.target)) {
  //       setSignInModal(false);
  //     }
  //   };
  //   document.addEventListener('click', closeSignInModal);

  //   return () => {
  //     document.removeEventListener('click', closeSignInModal);
  //   };
  // }, [signModal]);

  const navigate = useNavigate();

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

  // const handleSubmitData = async () => {
  //   try {
  //     const registeredUser = await createUserWithEmailAndPassword(
  //       firebaseAuth,
  //       userEmail,
  //       userPassword
  //     );
  //     console.log('true');
  //     // navigate('/signin');
  //   } catch (error) {
  //     if ('auth/invalid-email') {
  //       alert('이메일 형식을 지켜주세요.');
  //     } else if ('auth/email-already-in-use') {
  //       alert('이미 존재하는 이메일 입니다.');
  //     } else if ('auth/invalid-email') {
  //       alert('이메일 형식을 지켜주세요.');
  //     } else if ('auth / weak - password') {
  //       alert('비밀번호를 6자 이상 입력해주세요.');
  //     }
  //   }
  // };
  const testing = event => {
    setSignModal(true);
  };
  // console.log(signModal);
  // const handleSubmitData = () => {
  //   if (!isActiveForm) {
  //     alert('빈칸을 모두 채워주세요.');
  //   } else {
  //     axios
  //       .post(API.SIGN_UP, {
  //         name: userName,
  //         email: userEmail,
  //         password: userPassword,
  //       })
  //       // axios({
  //       //   method: 'post',
  //       //   url: API.SIGN_UP,
  //       //   data: {
  //       //     name: userName,
  //       //     email: userEmail,
  //       //     password: userPassword,
  //       //   },
  //       // })
  //       .then(res => {
  //         window.location.replace('/');
  //         console.log(res);
  //         console.log('true');
  //       })
  //       .catch(error => {
  //         alert(error);
  //         console.log('false');
  //       });
  //   }
  // };
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <S.SignUpWrapper>
      {signModal ? (
        <S.test>123</S.test>
      ) : (
        <S.SignUpContainer>
          <S.EntryContainer onSubmit={handleSubmit}>
            <S.Title>
              <button onClick={() => testing()}>회원가입</button>
            </S.Title>
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
                ref={el}
                onClick={() => testing()}
                // disabled={isActiveForm ? false : true}
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
      )}
      ;
    </S.SignUpWrapper>
  );
};

export default SignUp;
