// ./src/components/input/index.jsx

import React from 'react';
import { InputContainer, InputText, IconContainer } from './styles';

const Input = React.forwardRef(({ leftIcon, ...rest }, ref) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText ref={ref} {...rest} />
    </InputContainer>
  );
});

export { Input };
