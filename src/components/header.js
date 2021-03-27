import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { navLinks } from "@config"

import Logo from "./logo"

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background: #fefc3f;
`

const Header = () => {
  const { menu } = navLinks

  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <Logo />
      </Link>
      <nav className="flex items-center">
        {menu.map(({ name, url }, key) => {
          return (
            <Link
              className="text-lg font-bold px-3 py-2 rounded hover:bg-red-100 "
              key={key}
              to={url}
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </StyledHeader>
  )
}

export default Header
