import React from 'react';
import ButtonWrapper, { ButtonCentered } from './button.styled';

const Button = ({ children }) => {
  return (
    <ButtonCentered>
      <ButtonWrapper>{children}</ButtonWrapper>
    </ButtonCentered>
  );
};

export default Button;
