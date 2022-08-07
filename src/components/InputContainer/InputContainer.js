import React, { useState } from 'react';
import * as S from '../InputContainer/InputContainer.style';

const InputContainer = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [focus, setFocus] = useState('');

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
        onFocus={() => isFocusBorder(id)}
        onBlur={() => setFocus('')}
        focus={focus}
      />
    </S.InputContainer>
  );
};
export default InputContainer;
