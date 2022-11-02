import React from 'react';
import Section4Wrapper from './section4.styled';
import Accordion from '../../../../components/accordion';
import Container from '../../../../components/container';
import VenueInfo from '../../../../components/secondAccordion/venueInfo';
import Gate from '../../../../components/secondAccordion/gate';
import ItemsToLeaveHome from '../../../../components/secondAccordion/itemsToLeaveHome';
import Parking from '../../../../components/secondAccordion/parking';
import DrinkAndDrive from '../../../../components/secondAccordion/drinkAndDrive';
import Disclosures from '../../../../components/secondAccordion/disclosures';

const data = [
  {
    id: 1,
    header: 'VENUE INFO',
    content: <VenueInfo />,
  },
  {
    id: 2,
    header: 'WHERE TO ENTER / AT THE GATE',
    content: <Gate />,
  },
  {
    id: 3,
    header: 'ITEMS TO LEAVE AT HOME',
    content: <ItemsToLeaveHome />,
  },
  {
    id: 4,
    header: 'PARKING',
    content: <Parking />,
  },
  {
    id: 5,
    header: "DON'T DRINK AND DRIVE",
    content: <DrinkAndDrive />,
  },
  {
    id: 6,
    header: ' DISCLOSURES',
    content: <Disclosures />,
  },
];

const Section4 = () => {
  return (
    <Section4Wrapper>
      <Container>
        <Accordion items={data} />
      </Container>
    </Section4Wrapper>
  );
};

export default Section4;
