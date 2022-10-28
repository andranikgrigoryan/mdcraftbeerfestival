import React from 'react';
import StyledContainer from './container.styled';

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
