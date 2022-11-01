import React from 'react';
import Section3Wrapper, {
  CartCol,
  Line,
  Row3,
  TitleWrapper,
  ButtonWrapper,
  Row2,
} from './section3.styled';
import Container from '../../../../components/container';
import Button from '../../../../components/button';
import Table from '../../../../components/table';
import Accordion from '../../../../components/accordion';

const Section3 = () => {
  return (
    <Section3Wrapper>
      <Container>
        <TitleWrapper>
          <h3 className="title">2022 MDCBF Passes</h3>
          <p>
            If you’d like to join us at this year’s Maryland Craft Beer Festival, we’ve got a great
            selection of pass options for you!
          </p>
        </TitleWrapper>
        <Line color="#7ebec5" />
        <Row3>
          <div className="col">
            <CartCol>
              <h1 className="title">Enthusiast</h1>
              <h1 className="title">Tasting Pass</h1>
              <h3 className="price">$65.00</h3>
              <ul>
                <li>12:00 pm Entry</li>
                <li>
                  Get early access to small-batch & limited edition beers and enjoy samples of beer
                  from your favorite Maryland breweries!
                </li>
                <li>Exclusive Brewers Association of Maryland Tasting Glass</li>
                <li>TONS of MD Beer to Sample</li>
              </ul>
            </CartCol>
          </div>
          <div className="col">
            <CartCol>
              <h1 className="title">General</h1>
              <h1 className="title">Tasting Pass</h1>
              <h3 className="price">$45.00</h3>
              <ul>
                <li>1:30 pm Entry</li>
                <li>Enjoy samples of beer from your favorite Maryland breweries!</li>
                <li>Souvenir Brewers Association of Maryland Tasting Glass</li>
                <li>TONS of MD Beer to Sample</li>
              </ul>
            </CartCol>
          </div>
          <div className="col">
            <CartCol>
              <h1 className="title">Designated Driver</h1>
              <h1 className="title">Admission Pass</h1>
              <h3 className="price">$15.00</h3>
              <ul>
                <li>Non-drinkers gain full access of the event.</li>
                <li>Water is available for free at stations placed throughout the event. </li>
                <li>
                  <i>Kids 12 and under are free!</i>
                </li>
              </ul>
            </CartCol>
          </div>
        </Row3>
        <ButtonWrapper>
          <Button>GET YOUR PASSES HERE</Button>
        </ButtonWrapper>
        <Line />
        <TitleWrapper>
          <h3 className="title">Catch The BAM Bus</h3>
        </TitleWrapper>
        <Row2>
          <div className="col">
            <p className="text">Don’t live in Frederick? No problem!</p>
            <p className="text">
              BAM Buses are scheduled to depart from several Maryland breweries and will transport
              you safely to and from the Festival.
            </p>
            <p className="text">
              Each BAM Bus pass includes transportation to the Maryland Craft Beer Festival and
              gains you access to the Enthusiast Session. Buses depart from their corresponding
              brewery in the morning and will return to the hosting brewery that evening.
            </p>
          </div>
          <div className="col">
            <p className="text">
              BAM Buses are scheduled to depart from and return to the following breweries. Select
              the BAM Bus that is most convenient for you!
            </p>
            <ul>
              <li>Independent Brewing Company | Bel Air | Departs 10:00 am</li>
              <li>Lone Oak Farm Brewing Company | Olney | Departs 10:45 am</li>
              <li>Union Craft Brewing | Baltimore | Departs 10:30 am</li>
            </ul>
          </div>
        </Row2>
        <ButtonWrapper>
          <Button>GET ON THE BUS</Button>
        </ButtonWrapper>
        <Line />
        <TitleWrapper>
          <h3 className="title">Who Will Be There?</h3>
        </TitleWrapper>
        <Accordion />
      </Container>
    </Section3Wrapper>
  );
};

export default Section3;
