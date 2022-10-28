import React from 'react';
import Section1Wrapper, { Content } from './section1.styled';
import Container from '../../../../components/container';

const Section1 = () => {
  return (
    <Section1Wrapper>
      <Container>
        <Content>
          <h1>Section 1</h1>
        </Content>
      </Container>
    </Section1Wrapper>
  );
};

export default Section1;
