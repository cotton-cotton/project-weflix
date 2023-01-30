import React, { useEffect, useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';
import API from '../Config/Config';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
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
        // axios({
        //   method: 'post',
        //   url: API.SIGN_UP,
        //   data: {
        //     name: userName,
        //     email: userEmail,
        //     password: userPassword,
        //   },
        // })
        .then(res => {
          window.location.replace('/');
          console.log(res);
          console.log('true');
        })
        .catch(error => {
          alert(error);
          console.log('false');
        });
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
              onClick={handleSubmitData}
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
