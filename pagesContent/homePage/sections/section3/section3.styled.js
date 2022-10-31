import styled from 'styled-components';

const Section3Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 4% 0;
  @media only screen and (min-width: 1350px) {
    padding: 54px 0;
  }
`;

export const TitleWrapper = styled.div`
  padding: 2% 0;
  color: #333;
  font-family: 'Bevan', cursive;
  @media only screen and (min-width: 1350px) {
    padding: 27px 0;
  }
  h3.title {
    font-size: 66px;
    text-align: center;
    margin-top: 0;
    font-weight: 700;
    font-family: 'Bevan', cursive;
  }
  p {
    text-align: center;
    margin: 0;
    color: #666;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => (color ? color : '#525252')};
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const Row3 = styled.div`
  display: flex;
  gap: 3.33333%;
  .col {
    max-width: 30%;
    flex: 0 0 30%;
  }
`;

export const CartCol = styled.div`
  .title {
    font-size: 26px;
    color: #333;
    padding-bottom: 10px;
    line-height: 1;
    font-weight: 500;
    font-family: 'Bevan', cursive;
    &:last-child {
      margin-bottom: 9.27%;
    }
  }
  .price {
    font-size: 20px;
    color: #333;
    padding-bottom: 10px;
    line-height: 1em;
    color: #b71c19;
    font-weight: 500;
    font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  }
  ul {
    list-style-type: disc;
    color: #666;
    padding: 0 0 23px 1em;
    line-height: 26px;
    margin: 0;
    font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 700;
    li {
    }
  }
`;

export const ButtonWrapper = styled.div`
  padding: 30px 0;
  @media only screen and (min-width: 1350px) {
    padding: 27px 0;
  }
  @media (min-width: 981px) {
    padding: 2% 0;
  }
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  .col {
    max-width: 47.5%;
    flex: 0 0 47.5%;
  }
  .text {
    font-family: 'Arimo', sans-serif;
    padding-bottom: 1em;
    font-weight: normal;
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  ul {
    list-style-type: disc;
    color: #666;
    padding: 0 0 23px 1em;
    font-size: 14px;
    margin: 0;
    font-family: 'Arimo', sans-serif;
  }
`;

export default Section3Wrapper;
