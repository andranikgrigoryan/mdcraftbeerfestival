import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderWrapper, {
  Li,
  LogoLink,
  MainList,
  MainMediaButton,
  MediaButton,
  NavLogo,
  StyledLink,
  Ul,
} from './header.styled';
import logo from '../../assets/BAM_FestLogo_Web_MD_Type_Color.png';
import { useRouter } from 'next/router';
import Container from '../container';

const Header = () => {
  const router = useRouter();
  const [bigNavbar, setBigNavbar] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setBigNavbar(false);
      } else {
        setBigNavbar(true);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper bigNavbar={bigNavbar}>
      <Container className={'navbar'}>
        <LogoLink href="/">
          <NavLogo>
            <Image src={logo} alt="logo" />
          </NavLogo>
        </LogoLink>
        <MainList className={open ? 'show_list' : ''}>
          <Ul>
            <Li>
              <StyledLink href="/" className={router.pathname === '/' ? 'active' : ''}>
                Home
              </StyledLink>
            </Li>
            <Li>
              <StyledLink
                href="/participatingBreweries"
                className={router.pathname === '/participatingBreweries' ? 'active' : ''}
              >
                Participating Breweries
              </StyledLink>
            </Li>
            <Li>
              <StyledLink href="/vendor" className={router.pathname === '/vendor' ? 'active' : ''}>
                Vendor
              </StyledLink>
            </Li>
          </Ul>
        </MainList>
        <MediaButton>
          <MainMediaButton onClick={handleOpen} className={open ? 'active' : ''}>
            <span />
            <span />
            <span />
          </MainMediaButton>
        </MediaButton>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
