import styled from 'styled-components';

const Section4Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 4% 0;
  @media only screen and (min-width: 1350px) {
    padding: 54px 0;
  }
`;

export const Title = styled.h5`
  font-size: 16px;
  color: #333;
  padding-bottom: 10px;
  line-height: 1em;
  font-weight: 500;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  margin: 0;
`;

export const Text = styled.p`
  padding-bottom: 1em;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  margin: 0 !important;
  a {
    color: #2ea3f2 !important;
  }
`;

export const Ul = styled.ul`
  list-style-type: disc;
  padding: 0 0 23px 1em;
  line-height: 26px;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252;
  font-weight: 500;
  margin: 0;
  font-size: 14px;
`;

export default Section4Wrapper;
