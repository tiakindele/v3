module.exports = {
  //-- SITE SETTINGS -----
  author: "@tiakindele",
  siteTitle: "Tolu Akindele",
  siteShortTitle: "ta.", // Used as logo text in header, footer, and splash screen
  siteDescription: "Get to know more about Tolu.",
  siteUrl: "https://www.akindele.ca",
  siteLanguage: "en_US",
  siteIcon: "src/images/logo.png",
  seoTitleSuffix: "Portfolio",

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000"
    },
    darkTheme: {
      primary: "#FAFAFA"
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/tiakindele/",
    },
    {
      name: "Github",
      url:
        "https://github.com/tiakindele",
    },
    {
      name: "Mail",
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
