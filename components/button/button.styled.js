import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: inline-block;
  color: #c04331;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  padding: 0.3em 1em;
  line-height: 1.7em !important;
  background-color: transparent;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 2px solid;
  border-radius: 3px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: all !important;
  text-align: center;
  transition-property: all !important;
  transition: all 300ms ease 0ms;
  position: relative;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 30%);
  -webkit-text-size-adjust: 100%;
  vertical-align: baseline;
  cursor: pointer;
  &:after {
    transition: all 300ms ease 0ms;
    font-size: 32px;
    line-height: 1em;
    content: '';
    width: 9px;
    height: 9px;
    top: 17px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    opacity: 0;
    position: absolute;
    margin-left: -1em;
    text-transform: none;
    font-variant: none;
    font-style: normal;
    font-weight: 400;
    text-shadow: none;
    speak: none;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.3em 2em 0.3em 0.7em;
    &:after {
      opacity: 1;
      margin-left: 9px;
    }
  }
`;

export const ButtonCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ButtonWrapper;
