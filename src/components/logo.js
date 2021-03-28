import React from "react"
import styled from "styled-components"

import { siteShortTitle } from "@config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: 1.75rem;
  font-weight: 700;
  font-family: var(--font-logo);

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = () => (
  <StyledLogo>
    {siteShortTitle}
  </StyledLogo>
)

export default Logo
