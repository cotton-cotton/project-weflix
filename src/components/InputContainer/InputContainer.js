import React, { useState } from 'react';
import * as S from '../InputContainer/InputContainer.style';

const InputContainer = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  message,
  nameVal,
  emailVal,
  passwordVal,
  confirmVal,
}) => {
  const [focus, setFocus] = useState('');
  const [letterMessage, setLetterMessage] = useState(false);

  const isFocusBorder = id => {
    setFocus(id);
  };

  return (
    <S.InputWrapper>
      <S.InputContainer
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => {
          isFocusBorder(id);
          setLetterMessage(true);
        }}
        onBlur={() => {
          setFocus('');
          setLetterMessage(false);
        }}
        focus={focus}
      />
      {!nameVal && letterMessage ? (
        <S.InputMsg>{message.name}</S.InputMsg>
      ) : null}
      {!emailVal && letterMessage ? (
        <S.InputMsg>{message.email}</S.InputMsg>
      ) : null}
      {!passwordVal && letterMessage ? (
        <S.InputMsg>{message.password}</S.InputMsg>
      ) : null}
      {!confirmVal && letterMessage ? (
        <S.InputMsg>{message.confirm}</S.InputMsg>
      ) : null}
    </S.InputWrapper>
  );
};

export default InputContainer;
