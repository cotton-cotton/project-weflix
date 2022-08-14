import React, { useState } from 'react';
import * as S from '../InputContainer/InputContainer.style';

const InputContainer = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  message,
  isValidLetter,
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
      {letterMessage && !isValidLetter ? <S.test>{message}</S.test> : null}
    </S.InputContainer>
  );
};
export default InputContainer;
