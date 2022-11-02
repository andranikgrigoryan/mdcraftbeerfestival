import styled from 'styled-components';

const Text = styled.div`
  padding-bottom: 1em;
  font-family: 'Arimo', Helvetica, Arial, Lucida, sans-serif;
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const ImageWrapper = styled.a`
  text-decoration: none;
  height: 380px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default Text;
