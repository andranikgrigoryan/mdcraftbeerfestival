import React from 'react';
import TableWrapper, { Border, StyledTable, SubTitle, Title } from './table.styled';
import { Text } from '../../../pagesContent/homePage/sections/section2/section2.styled';
import { arr } from './tableData';
import Image from 'next/image';

const Table = () => {
  return (
    <TableWrapper>
      <Border>
        <SubTitle>CHECK OUT THESE PARTICIPATING BREWERIES</SubTitle>
        <Text>
          Breweries from all over Maryland will be pouring delicious beer throughout the Maryland
          Craft Beer Festival. Be sure to visit the following breweries:
        </Text>
        <StyledTable>
          <tbody>
            {arr.map((item, index) => {
              if (index % 3 === 0) {
                return (
                  <tr key={index + 1000}>
                    {arr.map((it, idx) => {
                      if (idx >= index && idx < index + 3) {
                        if (it.item) {
                          return (
                            <td key={it.id}>
                              <Image priority src={it.item} alt={'any'} />
                            </td>
                          );
                        } else {
                          return <td key={it.id}>… and MORE!</td>;
                        }
                      }
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        </StyledTable>
        <SubTitle>FEATURING THESE GREAT BEERS</SubTitle>
        <iframe
          loading="lazy"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2S3oduhZFOR85CMdEiaYHkm4PSAsD4PKx0NiUd2CeJaieb5d9mOoHzkUqJYEF1Erg1XWgoXqHzOTV/pubhtml?gid=191141175&amp;single=true&amp;widget=true&amp;headers=false"
          height="35%"
          width="100%"
        ></iframe>
      </Border>
    </TableWrapper>
  );
};

export default Table;
