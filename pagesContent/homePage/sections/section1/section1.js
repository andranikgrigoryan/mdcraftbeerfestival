import React from 'react';
import Section1Wrapper, {
  Content,
  Img,
  ImgWrapper,
  Title1,
  Title2,
  Titles,
} from './section1.styled';
import Container from '../../../../components/container';
import Image from 'next/image';
import image from '../../../../assets/cropped-BAM_FestLogo_Web_MD_GlassType_Color-1-300x300.png';
import Button from '../../../../components/button';

const Section1 = () => {
  return (
    <Section1Wrapper>
      <Container>
        <Content>
          <ImgWrapper>
            <Img>
              <Image src={image} alt={'any'} />
            </Img>
          </ImgWrapper>
          <Titles>
            <Title1>Saturday, May 14, 2022</Title1>
            <Title2>12 – 5 PM • Frederick, Maryland</Title2>
          </Titles>
          <Button>GET YOUR PASSES HERE</Button>
        </Content>
      </Container>
    </Section1Wrapper>
  );
};

export default Section1;
