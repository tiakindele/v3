import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { useScrollDirection } from '@hooks';
import { navLinks } from "@config";
import Logo from "./logo";
import ThemeContext from "@context/themeContext";
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.colors.background};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);

  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: ${({ theme }) => theme.colors.background};
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.boxShadow};
    `};

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.boxShadow};
    `};

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
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.secondary};
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: ${({ theme }) => theme.colors.link};
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.colors.linkHover};
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
      font-size: var(--fz-md);

      a {
        padding: 10px;

        &:before {
          content: '';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.link};
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

const Header = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  const themeContext = useContext(ThemeContext);
  const { menu } = navLinks;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {isMounted && (
          <Link to="/" aria-label="home">
            <Logo />
          </Link>
        )}

        <StyledLinks>
          <ol>
            {isMounted &&
              menu &&
              menu.map(({ name, url }, key) => {
                return (
                  <li key={key}><Link key={key} to={url}>{name}</Link></li>
                )
              })}
          </ol>

          {isMounted && (
            <button className="toggler-button" onClick={themeContext.themeToggler}>switch theme</button>
          )}
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
};

export default Header
