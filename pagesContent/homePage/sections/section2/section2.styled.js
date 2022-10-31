import styled from 'styled-components';

const Section2Wrapper = styled.div`
  width: 100%;
  background-color: #525252;
  padding-top: 50px;
  padding-right: 0px;
  padding-bottom: 50px;
  padding-left: 0px;

  @media only screen and (min-width: 1350px) {
    padding: 54px 0;
  }
  @media (min-width: 981px) {
    padding: 4% 0;
  }
`;

export const Row = styled.div`
  display: flex;
  padding: 2% 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  @media only screen and (min-width: 1350px) {
    padding: 27px 0;
  }
  @media (min-width: 981px) {
    flex-wrap: nowrap;
  }
`;

export const Col = styled.div`
  position: relative;
  z-index: 2;
  min-height: 1px;
  width: 100%;
  margin-bottom: 30px;
  @media (min-width: 981px) {
    width: 47.25%;
    margin-right: 5.5%;
  }
`;

export const Texts = styled.div`
  text-align: left;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  word-wrap: break-word;

  @media (min-width: 981px) {
    margin-bottom: 5.82%;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-family: 'Bevan', cursive;
  font-size: 26px;
  padding-bottom: 50px;
  line-height: 1em;
  font-weight: 700;
  margin: 0;
  &.right {
    padding-bottom: 40px;
  }
`;

export const Text = styled.p`
  color: #fff;
  padding-bottom: 1em;
  font-size: 14px;
  margin: 0;
  line-height: 1.7em;
  font-weight: 500;
  a {
    color: #2ea3f2;
    text-decoration: none;
    font-size: 14px;
  }
`;

export const TimerWrapper = styled.div`
  background-color: #e49825;
  padding: 4%;
`;

export const TimerContent = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  vertical-align: top;

  h4.title {
    font-family: 'Bevan', cursive;
    font-weight: 700;
    color: #525252;
    margin: 0 0 30px;
    padding: 0;
    text-align: center;
    font-size: 26px;
  }
`;

export const Timer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  .count {
    width: 17%;
    max-width: 160px;
    vertical-align: top;
    display: inline-block;
    position: relative;
    p.value {
      font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
      font-weight: 700;
      color: #ffffff;
      font-size: 38px;
      line-height: 38px;
      min-width: 100%;
      opacity: 0.4;
      padding-bottom: 0;
      text-align: center;
      margin: 0;
    }
    p.label {
      font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
      font-size: 12px;
      line-height: 20px;
      opacity: 0.4;
      display: block;
      text-align: center;
      color: #666;
      margin: 0;
    }
  }
  .sep {
    display: inline-block;
    position: relative;
    margin: 0;
    p {
      font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
      font-weight: 700;
      color: #ffffff;
      font-size: 38px;
      line-height: 38px;
      opacity: 0.4;
      text-align: center;
      display: inline-block;
      margin: 0;
    }
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-family: 'Bevan', cursive;
  margin-top: 0;
  margin-bottom: 24px;
`;
export const HoursPart = styled.div`
  color: #fff;
  margin-bottom: 46px;
  p {
    line-height: 1.7em;
    font-weight: 500;
    margin: 0;
  }
  p.title {
    font-size: 26px;
    font-weight: 700;
    padding-bottom: 32px;
  }
  p.hours {
    font-size: 18px;
  }
`;

export const BottomPart = styled.div`
  p {
    color: #fff;
    font-size: 14px;
    font-style: italic;
    margin: 0;
    padding-bottom: 14px;
  }
`;

export default Section2Wrapper;
