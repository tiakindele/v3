import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"

const GlobalStyle = createGlobalStyle`
  // Import normalize.css
  ${modernNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    font: "Roboto, Arial, sans-serif"
  }
`

export default GlobalStyle
