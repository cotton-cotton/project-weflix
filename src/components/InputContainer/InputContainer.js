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
    <S.InputContainer>
      <S.Input
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
      {!nameVal && letterMessage ? <S.test>{message.name}</S.test> : null}
      {!emailVal && letterMessage ? <S.test>{message.email}</S.test> : null}
      {!passwordVal && letterMessage ? (
        <S.test>{message.password}</S.test>
      ) : null}
      {/* {!confirmVal && letterMessage ? <S.test>{message.confirm}</S.test> : null} */}
    </S.InputContainer>
  );
};
export default InputContainer;
