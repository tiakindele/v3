import React, { useContext } from "react";
import ThemeContext from "@context/themeContext";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

const StyledToggler = styled.div`
  button {
    margin: 30px 0px 30px 20px;

    &:focus {
      outline: 0;
    }

    @media (max-width: 768px) {
      margin: 30px 20px 30px 0px;
    }
  }
`

const Toggler = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledToggler>
      <DarkModeToggle
        onChange={themeContext.themeToggler}
        checked={themeContext.theme === 'dark'}
        size={60}
      />
    </StyledToggler>
  );
}

export default Toggler;
