import styled from 'styled-components';

const Title = styled.h5`
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
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  a {
    color: #2ea3f2;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #eee;
  margin: 0 0 20px;
  text-align: left;

  tbody {
    tr {
      td {
        border: 1px solid #eee;
        padding: 6px 24px;
        width: 33.3333%;
        text-align: center;
        a {
          display: block;
          text-decoration: none;
          color: #2ea3f2;
          img {
            width: 95px;
            height: 95px;
            object-fit: contain;
          }
        }
        p {
          margin: 0;
          font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
          color: #525252 !important;
          font-weight: 500 !important;
        }
      }
    }
  }
`;

export default Title;
