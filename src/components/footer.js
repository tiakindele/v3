import React from "react"
import styled from "styled-components"

import Icon from "@components/icons/index"
import { socials } from "@config/index"


const StyledFooter = styled.footer`
  width: 100%;
  height: 10vh;
  background: #ed78f3;
`
const SocialLink = styled.a`
  svg {
    width: 2.7rem;
    padding: 10px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        {socials.map(({ name, url }, key) => {
          return (
            <SocialLink href={url} key={key} alt={`${name} icon`} target="_blank">
              <Icon name={name} color="black" />
            </SocialLink>
          )
        })}
      </div>
    </StyledFooter>
  )
}

export default Footer
