import styled from 'styled-components';

const AccordionStyled = styled.div`
  .rc-accordion-toggle {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    justify-content: space-between;
    transition: 0.3s;
  }
  .rc-accordion-toggle.active {
    background-color: transparent;
  }
  .rc-accordion-toggle.active .icon-wrapper {
    display: none;
  }
  .rc-accordion-card {
    padding: 20px;
    border: 1px solid #d9d9d9;
    margin-bottom: 10px;
    background-color: #d0cdc2;
    @media (min-width: 981px) {
      margin-bottom: 2.75%;
    }
    &.active {
      background-color: transparent;
    }
  }
  .rc-accordion-card:last-child {
    margin-bottom: 0;
  }
  .rc-accordion-title {
    position: relative;
    margin: 0;
    transition: 0.3s;
    font-family: 'Bevan', cursive;
    color: #c04332;
    padding: 0 50px 0 0;
    font-size: 16px;
    line-height: 1em;
    font-weight: 500;
    width: 100%;
    text-transform: uppercase;
    .icon-wrapper {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 100;
      font-size: 14px;
      border-radius: 30px;
      background-color: #578fbf;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      svg {
        width: 10px;
        height: 10px;
        object-fit: contain;
        fill: #fff;
      }
    }
  }

  .rc-accordion-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding-top: 20px;
    position: relative;
  }
  .rc-accordion-body p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #727e8c;
  }
  .rc-collapse {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  .rc-collapse.show {
    height: auto;
  }
`;

export default AccordionStyled;
