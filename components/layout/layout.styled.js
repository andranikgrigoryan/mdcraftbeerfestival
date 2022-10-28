import styled from 'styled-components';

const StyledLayout = styled.div`
  @media (min-width: 981px) {
    margin-top: ${({ bigNavbar }) => (bigNavbar ? '80px' : '54px')};
  }
`;

export default StyledLayout;
