import React, { useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import StyledLayout from './layout.styled';

export default function Layout({ children }) {
  const [bigNavbar, setBigNavbar] = useState(true);
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

  return (
    <>
      <Header />
      <StyledLayout bigNavbar={bigNavbar}>{children}</StyledLayout>
      <Footer />
    </>
  );
}
