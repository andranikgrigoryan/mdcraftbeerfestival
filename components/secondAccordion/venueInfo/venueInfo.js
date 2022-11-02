import React from 'react';
import Image from 'next/image';
import image from '../../../assets/dsc_0209_27966156134_o-1024x638.jpg';
import ImageWrapper from './venueInfo.styled';
import { Text } from '../../../pagesContent/homePage/sections/section4/section4.styled';

const VenueInfo = () => {
  return (
    <>
      <ImageWrapper>
        <Image
          src={image}
          alt={'any'}
          style={{ maxWidth: '582px', height: 'auto', margin: '0 auto' }}
        />
      </ImageWrapper>
      <Text>
        Carroll Creek Linear Park is a beautiful city park located in the heart of Downtown
        Frederick. There are tons of surrounding shops, boutiques, restaurants and bars nearby for
        you to enjoy when the festival has concluded.
      </Text>
      <Text>Reentry to the event is permitted so feel free to get out and explore!</Text>
    </>
  );
};

export default VenueInfo;
