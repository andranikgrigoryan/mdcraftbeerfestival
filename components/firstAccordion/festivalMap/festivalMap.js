import React from 'react';
import Text, { ImageWrapper } from './festivalMap.styled';
import Image from 'next/image';
import image from '../../../assets/map_layout_2022_rev2-240x300.jpeg';
import { useRouter } from 'next/router';

const FestivalMap = () => {
  const router = useRouter();
  return (
    <>
      <Text>Use the map below to plan your Maryland Craft Beer Festival itinerary!</Text>
      <Text>(Click the image to open the map in a new window.)</Text>
      <ImageWrapper
        href={
          'http://www.mdcraftbeerfestival.com/wp-content/uploads/2022/05/map_layout_2022_rev2.pdf'
        }
        target={'_blank'}
      >
        <Image src={image} alt="any" />
      </ImageWrapper>
    </>
  );
};

export default FestivalMap;
