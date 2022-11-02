import React from 'react';
import ButtonWrapper, { ButtonCentered } from './button.styled';

const Button = ({ children, onClick }) => {
  return (
    <ButtonCentered>
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    </ButtonCentered>
  );
};

export default Button;
