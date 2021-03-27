import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

const Header = () => {
  return (
    <Link to="/" aria-label="home">
      <Logo />
    </Link>
  )
}

export default Header
