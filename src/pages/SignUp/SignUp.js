import React, { useEffect, useState } from 'react';
import * as S from '../SignUp/SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';

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

  const { userName, userEmail, userPassword, userPasswordConfirm } = inputValue;

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

  // const fetchUsers = async () => {
  //   try {
  //     // 요청이 시작할때 error와 users를 초기화
  //     setError(null);
  //     setUsers(null);
  //     // loading 상태는 true로 변경
  //     setLoading(true);

  //     const response = await axios
  //       .get
  //       // 코드
  //       ();
  //     //데이터는 response.data 안에 들어있음
  //     setUsers(response.data);
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };
  // const URL = '172.30.1.4:8000/user/signup';
  // console.log(inputValue);
  // const fetchUsers = () => {
  //   console.log(URL);
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
  //         console.log('성공');
  //       } else {
  //         console.log('실패');
  //       }
  //     });
  // };

  // const fetchUsers = () => {
  //   if (!isActiveForm) {
  //     // alert('빈칸을 모두 채워주세요.');
  //   } else

  //   axios({
  //     url: '172.30.1.4:8000/users/signup',
  //     method: 'post',
  //     data: {
  //       name: userName,
  //       email: userEmail,
  //       password: userPassword,
  //       //passwordConfirm: userPasswordConfirm,
  //     },
  //   })
  //   axios
  //     .post(URL, {
  //       name: userName,
  //       email: userEmail,
  //       password: userPassword,
  //       //passwordConfirm: userPasswordConfirm,
  //     })
  //     .then(function (response) {
  //       console.log('성공');
  //       navigate('/signup');
  //     })
  //     .catch(function (error) {
  //       console.log('실패');
  //       // alert('잘못된 정보입니다!');
  //     });
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

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
              // onClick={fetchUsers}
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
