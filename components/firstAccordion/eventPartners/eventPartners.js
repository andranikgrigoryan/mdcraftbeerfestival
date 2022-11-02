import React from 'react';
import Image from 'next/image';
import image1 from '../../../assets/Navy.png-300x156.png';
import image2 from '../../../assets/Idiom-Updated-Hops-2019-Green-Standard-Circle-Full-Fill.png';
import { Table } from '../liveMusic/liveMusic.styled';
import img1 from '../../../assets/1.png';
import img3 from '../../../assets/3.png';
import img2 from '../../../assets/2.png';
import support1 from '../../../assets/4.png';
import support2 from '../../../assets/5.png';
import support3 from '../../../assets/6.png';
import support4 from '../../../assets/7.png';
import introductory from '../../../assets/CCE_post.jpeg';
import { Text } from '../table/table.styled';
import { Table2, Wrapper } from './eventPartners.styled';

const EventPartners = () => {
  return (
    <>
      <Text>
        The Maryland Craft Beer Festival is made possible by the support of our event partners.
        Please show your appreciation to the following businesses that assist our industry.
      </Text>
      <Text>
        <strong>Featured Host</strong>
      </Text>
      <Wrapper>
        <Image src={image1} alt="any" />
      </Wrapper>
      <Text>
        <strong>Featured Co-Hosts</strong>
      </Text>
      <Wrapper>
        <Image src={image2} alt="any" style={{ width: '200px', height: '200px' }} />
      </Wrapper>
      <Text>
        <strong>Featured Co-Hosts</strong>
      </Text>
      <Table>
        <tbody>
          <tr>
            <td>
              <Image
                src={img1}
                alt={'any'}
                style={{ width: '100%', height: '150px', objectFit: 'contain' }}
              />
            </td>
            <td>
              <Image
                src={img3}
                alt={'any'}
                style={{ width: '100%', height: '150px', objectFit: 'contain' }}
              />
            </td>
            <td>
              <Image
                src={img2}
                alt={'any'}
                style={{ width: '100%', height: '150px', objectFit: 'contain' }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Text>
        <strong>Supporting Partners </strong>
      </Text>
      <Table2>
        <tbody>
          <tr>
            <td>
              <Image
                src={support1}
                alt={'any'}
                style={{ width: '100%', height: '105px', objectFit: 'contain' }}
              />
            </td>
            <td>
              <Image
                src={support2}
                alt={'any'}
                style={{ width: '100%', height: '105px', objectFit: 'contain' }}
              />
            </td>
            <td>
              <Image
                src={support3}
                alt={'any'}
                style={{ width: '100%', height: '105px', objectFit: 'contain' }}
              />
            </td>
            <td>
              <Image
                src={support4}
                alt={'any'}
                style={{ width: '100%', height: '105px', objectFit: 'contain' }}
              />
            </td>
          </tr>
        </tbody>
      </Table2>
      <Text>
        <strong>Introductory Partners </strong>
      </Text>
      <Table2>
        <tbody>
          <tr>
            <td>
              <Image
                src={introductory}
                alt={'any'}
                style={{ width: '100%', height: '105px', objectFit: 'contain' }}
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table2>
    </>
  );
};

export default EventPartners;
