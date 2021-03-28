import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { navLinks } from "@config"
import Logo from "./logo"
import ThemeContext from "@context/themeContext"

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  top: 0;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.colors.background};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .toggler-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Header = () => {
  const { menu } = navLinks
  const themeContext = useContext(ThemeContext);

  return (
    <StyledHeader>
      <StyledNav>
        <Link to="/" aria-label="home">
          <Logo />
        </Link>

        <StyledLinks>
          <ol>
            { menu &&
              menu.map(({ name, url }, key) => {
                return (
                  <li><Link key={key} to={url}>{name}</Link></li>
                )
              })}
          </ol>
          <button className="toggler-button" onClick={themeContext.themeToggler}>switch theme</button>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
