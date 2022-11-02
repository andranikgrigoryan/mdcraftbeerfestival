import styled from 'styled-components';
import { Table } from '../liveMusic/liveMusic.styled';

const Text = styled.p`
  padding-bottom: 1em;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const Wrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  img {
    width: 300px;
    height: auto;
    object-fit: contain;
  }
`;
export const Table2 = styled(Table)`
  td {
    width: 25% !important;
  }
`;
export default Text;
