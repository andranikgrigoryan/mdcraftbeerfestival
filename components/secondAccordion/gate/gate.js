import React from 'react';
import { Text, Ul } from '../../../pagesContent/homePage/sections/section4/section4.styled';

const Gate = () => {
  return (
    <>
      <Text>
        The 2022 Maryland Craft Beer Festival has THREE (3) entrances. Bring your digital or printed
        ticket and valid ID with you to check in at any of our event entrances. Refer to the
        Festival Map for more details about entrances.
      </Text>
      <Text>
        <strong>Gate Locations</strong>
      </Text>
      <Ul>
        <li>
          Downtown Entrance – <em>44 S Market Street</em>
        </li>
        <li>
          East Street Entrance –{' '}
          <em>
            1209 S East Street, directly across the street from MARC Station Kiss & Ride Entrance
          </em>
        </li>
        <li>
          MARC Station Kiss & Ride –{' '}
          <em>1209 S East Street, directly across the street from East Street Entrance</em>
        </li>
      </Ul>
      <Text>
        Enthusiast Pass ticket holder admission begins at 12:00 pm at both gate locations.
      </Text>
      <Text>
        General Tasting Pass holders will NOT be able to gain access to the festival until 1:30pm.
      </Text>
      <Text style={{ padding: 0 }}>
        All bags, blankets, and items carried into the event are subject to search.
      </Text>
    </>
  );
};

export default Gate;
