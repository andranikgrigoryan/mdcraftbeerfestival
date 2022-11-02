import React from 'react';
import { Text, Ul } from '../../../pagesContent/homePage/sections/section4/section4.styled';

const ItemsToLeaveHome = () => {
  return (
    <>
      <Text>
        The Carroll Creek Linear Park is a beautiful venue for the Maryland Craft Beer Festival. To
        ease the effects of crowding along the park, we ask that you refrain from bringing any of
        the items in the list below.
      </Text>
      <Text>
        <strong>Please leave these items at home:</strong>
      </Text>
      <Ul>
        <li>
          <strong>NO Animals. </strong> Our breweries brew beer for human beings and we’ll only
          allow humans to attend the Maryland Craft Beer Festival (NOTE: registered service dogs
          will be permitted inside the event).
        </li>
        <li>
          <strong>NO Coolers.</strong>
        </li>
        <li>
          <strong>NO Chairs.</strong> Bring a blanket to spread out in the green spaces throughout
          the park, instead.
        </li>
        <li>
          <strong>NO Tents or Pop-up Canopies.</strong>
        </li>
        <li>
          <strong>NO Strollers. </strong> While we welcome your little ones, there is not enough
          room along the park’s promenade to accommodate strollers.
        </li>
        <li>
          <strong>NO Outside Alcohol.</strong>
        </li>
      </Ul>
    </>
  );
};

export default ItemsToLeaveHome;
