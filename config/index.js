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
      background: "#020202"
    },
    darkTheme: {
      primary: "#FAFAFA",
      background: "#F2F2F2"
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
