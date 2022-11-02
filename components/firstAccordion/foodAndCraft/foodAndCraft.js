import React from 'react';
import Title, { Table, Text } from '../liveMusic/liveMusic.styled';
import TdText from './foodAndCraft.styled';

const FoodAndCraft = () => {
  return (
    <>
      <Title style={{ fontSize: '14px' }}>SUPPORT OUR FOOD & CRAFT VENDORS</Title>
      <Text>Every great festival has great vendors!</Text>
      <Text>
        We’ve got some awesome small businesses, partners, and food trucks that will be vending at
        the 2022 Maryland Craft Beer Festival. Be sure to visit these vendors and support these
        local businesses.
      </Text>
      <Title>
        <strong>Participating Food Trucks</strong>
      </Title>
      <Table>
        <tbody>
          <tr>
            <td>
              <TdText>2 Guys 1 Grill</TdText>
            </td>
            <td>
              <TdText>Althea’s Almost Famous</TdText>
            </td>
            <td>
              <TdText>Baltimore Crab Cake Co.</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Boxcar Burgers</TdText>
            </td>
            <td>
              <TdText>Grilled Cheese Please</TdText>
            </td>
            <td>
              <TdText>Pop-up Poutine</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Smoqed BBQ</TdText>
            </td>
            <td>
              <TdText>Taco Bar</TdText>
            </td>
            <td>
              <TdText>Whistle Pig Food Truck</TdText>
            </td>
          </tr>
        </tbody>
      </Table>
      <Title>
        <strong>Participating Craft Vendors</strong>
      </Title>
      <Table>
        <tbody>
          <tr>
            <td>
              <TdText>American Pest</TdText>
            </td>
            <td>
              <TdText>Balti’Marons</TdText>
            </td>
            <td>
              <TdText>Beltway Merch</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>BroHo Sauce Co.</TdText>
            </td>
            <td>
              <TdText>CleanChoice Electric</TdText>
            </td>
            <td>
              <TdText>Club Pilates</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Fairview Creations</TdText>
            </td>
            <td>
              <TdText>Fed Thrill Sunglasses</TdText>
            </td>
            <td>
              <TdText>Gogo’s Fashion Bus</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Hammer Glamour 925</TdText>
            </td>
            <td>
              <TdText>Hillbilly Jerky</TdText>
            </td>
            <td>
              <TdText>Kinda Jerky Really Nutty</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Kara’s K9 Waffle Treats</TdText>
            </td>
            <td>
              <TdText>Luci Pet Pantry</TdText>
            </td>
            <td>
              <TdText>Lunniaya Art</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Major Flavor</TdText>
            </td>
            <td>
              <TdText>New Brew Merch</TdText>
            </td>
            <td>
              <TdText>The Silver Cat</TdText>
            </td>
          </tr>
          <tr>
            <td>
              <TdText>Sweet Buds Dispensary</TdText>
            </td>
            <td>
              <TdText>With Mama Moon</TdText>
            </td>
            <td>
              <TdText></TdText>
            </td>
          </tr>
        </tbody>
      </Table>
      <Title>
        <strong>Participating Craft Vendors</strong>
      </Title>
      <Table>
        <tbody>
          <tr>
            <td>
              <TdText>Frederick Health Hospital Mobile Vaccine Clinic</TdText>
            </td>
            <td>
              <TdText>Pink Boots Society Greater Maryland Chapter</TdText>
            </td>
            <td>
              <TdText>Visit Frederick</TdText>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default FoodAndCraft;
