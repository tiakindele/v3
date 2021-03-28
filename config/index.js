module.exports = {
  //-- SITE SETTINGS -----
  author: "Tolu Akindele",
  siteTitle: "Tolu Akindele",
  siteShortTitle: "ta.",
  siteDescription: "Get to know more about Tolu.",
  siteUrl: "https://www.akindele.ca",
  siteLanguage: "en_US",
  siteIcon: "src/images/logo.png",
  seoTitleSuffix: "Portfolio",

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      buttonBorder: "#256256",
      buttonFill: "transparent",
      buttonHover: "#cdf3e1",
      card: "#555555",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      buttonBorder: "#256256",
      buttonFill: "transparent",
      buttonHover: "#cdf3e1",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/tiakindele/",
    },
    {
      name: "github",
      url: "https://github.com/tiakindele",
    },
    {
      name: "mail",
      url: "mailto:tolu@akindele.ca",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  }
}
