import React, { useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

import { lightTheme, darkTheme } from "@styles/theme"
import { useDarkMode } from "@components/useDarkMode"
import ThemeContext from "@context/themeContext"
import GlobalStyle from "@styles/globalStyle"
import Header from "./header"
import Footer from "./footer"
import Social from "./social"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0;
  }
`

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    const id = location.hash.substring(1); // location.hash without the '#'
    setTimeout(() => {
      const el = document.getElementById(id || 'hero');
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }, 0);

    handleExternalLinks();
  }, []);

  // if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyle />
      <ThemeContext.Provider value={{themeToggler: themeToggler, theme: theme}}>
        <StyledLayout>
          <Header isHome={isHome}/>
          <Social isHome={isHome}/>
          <main id="main-content">{children}</main>
          <Footer />
        </StyledLayout>
      </ThemeContext.Provider>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
