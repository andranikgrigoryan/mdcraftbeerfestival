import React from 'react';
import Section2Wrapper, {
  BottomPart,
  Col,
  HoursPart,
  Row,
  SubTitle,
  Text,
  Texts,
  Timer,
  TimerContent,
  TimerWrapper,
  Title,
} from './section2.styled';
import Container from '../../../../components/container';

const Section2 = () => {
  return (
    <Section2Wrapper>
      <Container>
        <Row>
          <Col>
            <Texts>
              <Title>Hey Frederick, we’re back!</Title>
              <Text>
                The
                <a href="https://marylandbeer.org/" target="_blank">
                  Brewers Association of Maryland
                </a>
                returns to the Carroll Creek Linear Park in Frederick for the 2022 Maryland Craft
                Beer Festival! We’re thrilled to be gathering with you for this great festival and
                will comply with all federal, state, and local COVID-19 guidelines and restrictions.
              </Text>
              <Text>
                Festival entry includes beer samples from{' '}
                <strong>DOZENS OF MARYLAND BREWERIES</strong> (including a few breweries not yet
                open to the public!) pouring more than 200 unique, beers – all brewed in Maryland.
              </Text>
              <Text>
                In addition, there will be live music and a great selection of food and craft
                vendors throughout the festival.
              </Text>
            </Texts>
            <TimerWrapper>
              <TimerContent>
                <h4 className="title">So soon we can taste it...</h4>
              </TimerContent>
              <Timer>
                <div className="count">
                  <p className="value">000</p>
                  <p className="label">Day(s)</p>
                </div>
                <div className="sep">
                  <p>:</p>
                </div>
                <div className="count">
                  <p className="value">00</p>
                  <p className="label">Hour(s)</p>
                </div>
                <div className="sep">
                  <p>:</p>
                </div>
                <div className="count">
                  <p className="value">00</p>
                  <p className="label">Minute(s)</p>
                </div>
                <div className="sep">
                  <p>:</p>
                </div>
                <div className="count">
                  <p className="value">00</p>
                  <p className="label">Second(s)</p>
                </div>
              </Timer>
            </TimerWrapper>
          </Col>
          <Col>
            <Texts>
              <Title className="right">Event Address</Title>
              <SubTitle>
                Carroll Creek Linear Park <br /> 44 South Market St, Frederick, MD 21701
              </SubTitle>
              <HoursPart>
                <p className="title">Event Hours</p>
                <p className="hours">12:00-1:30 PM • Enthusiast Session</p>
                <p className="hours">1:30-5:00 PM • General Tasting Session</p>
                <p className="hours">Last Call 4:45pm • Rain or Shine</p>
              </HoursPart>
              <BottomPart>
                <p>Tickets are nonrefundable & only available in advance.</p>
                <p>Valid, government-issued ID required for entry.</p>
                <p>
                  Proceeds of the Maryland Craft Beer Festival directly benefit the legislative and
                  promotional efforts of the Brewers Association of Maryland and its member
                  community.
                </p>
              </BottomPart>
            </Texts>
          </Col>
        </Row>
      </Container>
    </Section2Wrapper>
  );
};

export default Section2;
