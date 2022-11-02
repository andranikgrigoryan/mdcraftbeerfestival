import React from 'react';
import { Text } from '../../../pagesContent/homePage/sections/section4/section4.styled';

const Disclosures = () => {
  return (
    <>
      <Text>
        <strong>Brewers Association of Maryland Disclosure and Waiver</strong>
      </Text>
      <Text>
        The Brewers Association of Maryland invites you to experience Maryland beer responsibly. To
        ensure the safety and enjoyment of our attendees, we reserve the right to refuse service of
        alcohol or excuse attendees from our events, at any time.
      </Text>
      <Text>
        <strong>COVID- 19 Policy</strong>
      </Text>
      <Text>
        All event attendees and vendors must follow any COVID-19 mandates and guidelines enacted by
        Frederick County or the City of Frederick.
      </Text>
      <Text>
        By attending the Maryland Craft Beer Festival and/or purchasing tasting passes, you are
        agreeing to the{' '}
        <a href="https://marylandbeer.org/covid-19-safety-acknowledgement/">
          Brewers Association of Maryland’s COVID-19 Safety Acknowledgment
        </a>
        .
      </Text>
    </>
  );
};

export default Disclosures;
