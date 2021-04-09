import React, { useContext } from "react";
import ThemeContext from "@context/themeContext";
import styled from "styled-components";
import { isMobile} from "react-device-detect";

const IconWrapper = styled.button`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: auto;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  transform: scale(0.8);
  margin-left: 16px;
  background-color: transparent;
  &:hover {
    opacity: 1;
  }
  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }
  :focus {
    outline: 0px;
  }
  @media (max-width: 768px) {
    margin: 18px 0px;
    display: inline-flex;
    &:hover {
      opacity: 0.5;
    }
  }
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${p => (p.isDark ? "4px" : "2px")} solid
    ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: var(--transition);
  overflow: ${p => (p.isDark ? "visible" : "hidden")};
  &::before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transform: translate(${p => (p.isDark ? "14px, -14px" : "0, 0")});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: var(--transition);
  }
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.primary},
      0 23px 0 ${({ theme }) => theme.colors.primary},
      23px 0 0 ${({ theme }) => theme.colors.primary},
      -23px 0 0 ${({ theme }) => theme.colors.primary},
      15px 15px 0 ${({ theme }) => theme.colors.primary},
      -15px 15px 0 ${({ theme }) => theme.colors.primary},
      15px -15px 0 ${({ theme }) => theme.colors.primary},
      -15px -15px 0 ${({ theme }) => theme.colors.primary};
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: var(--transition);
  }
`;

const MoonMask = styled.div`
  position: absolute;
  right: ${p => (p.isMobile ? '10px' : '-1px')};
  top: ${p => (p.isMobile ? '-8px' : '-8px')};
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  transform: translate(${p => (p.isDark ? "14px, -14px" : "0, 0")});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: ${({ theme }) => theme.colors.background} var(--transition);
`;

const Toggler = () => {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext.theme === 'dark';

  return (
    <IconWrapper
      isDark={isDark}
      onClick={themeContext.themeToggler}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} isMobile={isMobile} />
    </IconWrapper>
  );
}

export default Toggler;
