import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

import { lightTheme, darkTheme } from "@styles/theme"
import { useDarkMode } from "@components/useDarkMode"
import ThemeContext from "@context/themeContext"
import GlobalStyle from "@styles/globalStyle"
import Header from "./header"
import Footer from "./footer"

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
    padding: 0 2.5rem;
  }
`

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyle />
      <ThemeContext.Provider value={{themeToggler: themeToggler, theme: theme}}>
        <StyledLayout>
          <Header />
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
