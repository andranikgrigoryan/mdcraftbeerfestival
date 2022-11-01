import styled from 'styled-components';

const TableWrapper = styled.div``;

export const Border = styled.div``;

export const Title = styled.h5`
  color: #c04332;
  font-family: 'Bevan', cursive;
  line-height: 1em;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const SubTitle = styled.h5`
  font-size: 16px;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #333;
  padding-bottom: 10px;
  line-height: 1em;
  font-weight: 500;
  margin: 0;
`;
export const Text = styled.p`
  padding-bottom: 1em;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252;
`;

export const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  height: 872px;
  border: 1px solid #eee;
  text-align: left;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252;
  margin: 0 auto 15px;
  tbody {
    tr {
      td {
        width: 33.3333%;
        text-align: center;
        height: 78px;
        border-top: 1px solid #eee;
        padding: 6px 24px;
        img {
          clear: both;
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
          height: 100%;
          width: auto;
        }
      }
    }
  }
`;

export default TableWrapper;
