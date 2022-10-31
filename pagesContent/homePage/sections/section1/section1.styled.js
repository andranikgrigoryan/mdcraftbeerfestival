import styled from 'styled-components';

const Section1Wrapper = styled.div`
  width: 100%;
  padding: 54px 0;
  background-image: url(http://www.mdcraftbeerfestival.com/wp-content/uploads/2022/02/mdcbf_bg.jpeg) !important;
  position: relative;
  background-color: #fff;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding: 27px 0;
`;

export const ImgWrapper = styled.div`
  max-width: 45%;
  text-align: center;
  margin-bottom: 2.75%;
  margin-left: auto;
  margin-right: auto;
  line-height: 0;
`;
export const Img = styled.div`
  display: inline-block;
  position: relative;
  max-width: 100%;
  width: 300px;
  height: 300px;
  img {
    height: auto;
    max-width: 100%;
  }
`;

export const Titles = styled.div`
  margin-bottom: 2.75%;
  text-align: center;
  font-family: 'Bevan', display;
  word-wrap: break-word;
`;

export const Title1 = styled.h2`
  text-align: center;
  line-height: 200%;
  font-family: 'Bevan', display;
  font-size: 32px;
  color: #333;
  padding-bottom: 10px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Title2 = styled.h3`
  color: #e49825;
  font-size: 22px;
  padding-bottom: 10px;
  line-height: 1em;
  font-weight: 500;
`;

export default Section1Wrapper;
