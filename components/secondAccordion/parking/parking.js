import React from 'react';
import { Text, Ul } from '../../../pagesContent/homePage/sections/section4/section4.styled';

const Parking = () => {
  return (
    <>
      <Text>
        Downtown Frederick’s parking options include five public parking garages, surface parking
        lots and on-street parking.
      </Text>
      <Text>
        The event venue is centrally located in Frederick and is just a short walk from any of the
        parking options listed here.
      </Text>
      <Text>
        <strong>Parking Garages</strong>
      </Text>
      <Ul>
        <li>
          Carroll Creek Public Parking Garage – <em> 44 E Patrick St</em>
        </li>
        <li>
          Church Street Public Parking Garage – <em>17 E Church St</em>
        </li>
        <li>
          Court Street Public Parking Garage – <em>2 S Court St</em>
        </li>
        <li>
          East All Saints Public Parking Garage – <em>125 E All Saints St</em>
        </li>
        <li>
          West Patrick Street Garage – <em>138 W Patrick St</em>
        </li>
      </Ul>
      <Text>
        <strong>
          Surface Parking <em>Surface Parking</em>
        </strong>
      </Text>
      <Ul>
        <li>
          North Market Street Public Parking Lot – <em>331 N Market St</em>
        </li>
        <li>On-street parking throughout Downtown Frederick.</li>
      </Ul>
    </>
  );
};

export default Parking;
