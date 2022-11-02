import React from 'react';
import Title, { Table, Text } from './liveMusic.styled';
import Image from 'next/image';
import image1 from '../../../assets/schu_blue-150x150.png';
import image2 from '../../../assets/2DISCOskribe.png';
import image3 from '../../../assets/19thStBand_CircleLogo_transparent.png';
import image4 from '../../../assets/rov-1-150x150.png';
import image5 from '../../../assets/kev_bev2-150x150.png';
import image6 from '../../../assets/joekeyeslogo.png';

const LiveMusic = () => {
  return (
    <>
      <Title>Great Beer, Great Music</Title>
      <Text>
        Our lineup of local musicians will keep your body moving throughout the festival! Be sure to
        check these bands out at our two stage locations.
      </Text>
      <br />
      <Title>
        <strong>Participating Musicians | Carroll Creek Stage</strong>
      </Title>
      <Text>&nbsp;</Text>
      <Table>
        <tbody>
          <tr>
            <td>
              <div>
                <a href="https://www.facebook.com/schuandthesouls">
                  <Image src={image1} alt="any" />
                </a>
                <a href="https://www.facebook.com/schuandthesouls">Schu and the Souls</a>
              </div>
              <p>12:00-1:30 PM</p>
            </td>
            <td>
              <div>
                <a href="https://www.skribestudios.com/">
                  <Image src={image2} alt="any" />
                </a>
                <a href="https://www.skribestudios.com/">SKRIBE</a>
              </div>
              <p>1:45-3:15 PM</p>
            </td>
            <td>
              <div>
                <a href="https://19thstreetband.com/">
                  <Image src={image3} alt="any" />
                </a>
                <a href="https://19thstreetband.com/">The 19th Street Band</a>
              </div>
              <p>3:30-5:00 PM</p>
            </td>
          </tr>
        </tbody>
      </Table>
      <Title>
        <strong>Participating Musicians | Station Lot Stage</strong>
      </Title>
      <Text>
        This stage features Chris Sands of the{' '}
        <a href="https://www.fnppodcasts.com/uncapped">UnCapped Podcast</a> as the emcee!
      </Text>
      <Table>
        <tbody>
          <tr>
            <td>
              <div>
                <a href="https://www.facebook.com/RaysOfVioletBand/">
                  <Image src={image4} alt="any" />
                </a>
                <a href="https://www.facebook.com/RaysOfVioletBand/">Rays Of Violet</a>
              </div>
              <p>12:00-1:30 PM</p>
            </td>
            <td>
              <div>
                <a href="https://www.kevbevmusic.com/">
                  <Image src={image5} alt="any" />
                </a>
                <a href="https://www.kevbevmusic.com/">Kev Bev</a>
              </div>
              <p>1:45-3:15 PM</p>
            </td>
            <td>
              <div>
                <a href="https://www.skribestudios.com/">
                  <Image src={image6} alt="any" />
                </a>
                <a href="https://www.skribestudios.com/">Joe Keyes & the Late Bloomer Band</a>
              </div>
              <p>3:30-5:00 PM</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default LiveMusic;
