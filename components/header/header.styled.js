import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  background-color: #fff;
  height: ${({ bigNavbar }) => (bigNavbar ? '80px' : '54px')};
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  z-index: 99999;
  transition: all 300ms ease-in-out;
  .navbar {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    padding: 0 !important;
  }
  @media (max-width: 980px) {
    position: relative;
    height: 80px !important;
  }
`;

export const NavLogo = styled.div`
  height: 54%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LogoLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  gap: 24px;
  margin: 0;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 100%;
    border-top: 3px solid #2ea3f2;
    padding: 5%;
    background: #fff;
    gap: 0;
  }
`;
export const Li = styled.li`
  @media (max-width: 980px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    padding: 10px 5%;
    display: block;
  }
`;

export const MainList = styled.div`
  transition: all 300ms ease-in-out;
  &.show_list {
    max-height: 200px;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }
  @media (max-width: 980px) {
    width: 100%;
    margin-top: 80px;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
  }
`;

export const MediaButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 980px) {
    display: flex;
  }
`;

export const MainMediaButton = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
  outline: 0;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    width: 100%;
    height: 2px;
    display: block;
    background-color: #2ea3f2;
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #525252;
  font-weight: 600;
  &.active {
    color: #e39725;
  }
  @media (max-width: 980px) {
    color: #525252;
  }
`;

export default HeaderWrapper;
