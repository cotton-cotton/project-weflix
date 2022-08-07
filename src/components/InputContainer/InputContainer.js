import React, { useState } from 'react';
import * as S from '../InputContainer/InputContainer.style';

const InputContainer = ({ id, type, name, placeholder, onChange }) => {
  const [focus, setFocus] = useState('test');

  const isFocusBorder = id => {
    setFocus(id);
  };
  console.log(focus);
  return (
    <S.InputContainer>
      <S.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => isFocusBorder(id)}
        onBlur={() => setFocus('')}
      />
    </S.InputContainer>
  );
};
export default InputContainer;
