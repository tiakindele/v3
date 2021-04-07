module.exports = {
  //-- SITE SETTINGS -----
  author: "Tolu Akindele",
  siteTitle: "Tolu Akindele",
  email: "tolu@akindele.ca",
  siteShortTitle: "ta.",
  siteDescription: "Get to know more about Tolu.",
  siteUrl: "https://www.akindele.ca",
  siteLanguage: "en_US",
  siteIcon: "src/images/logo.png",
  siteImage: "static/home.png",
  seoTitleSuffix: "Portfolio",

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#050505",
      secondary: "#D5D6D9",
      text: "rgba(0, 0, 0, 0.87)",
      subtext: "#555555",
      tertiary: "#9E663C",
      card: "#E3E3E3",
      background: "#EDEDED",
      link: "#9E663C",
      linkHover: "rgba(115, 62, 38, 0.1)",
      buttonBorder: "#9E663C",
      buttonFill: "transparent",
      buttonTint: "rgba(115, 62, 38, 0.1)",
      buttonTintBorder: "transparent",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(255, 255, 255, 0.16)",
      boxShadowHover: "rgba(255, 255, 255, 0.32)",
      selectionBg: "#DCCAAB",
      selectionText: "#332909",
      header: "#141004",
      darkerHeader: "#574D2E",
      darkestHeader: "#808082",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      tertiary: "#64ffda",
      card: "#1C1C1C",
      background: "#121212",
      link: "#64ffda",
      linkHover: "rgba(100, 255, 218, 0.1)",
      buttonBorder: "#64ffda",
      buttonFill: "transparent",
      buttonTint: "rgba(100, 255, 218, 0.1)",
      buttonTintBorder: "transparent",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
      selectionBg: "#233554",
      selectionText: "#ccd6f6",
      header: "#ccd6f6",
      darkerHeader: "#a8b2d1",
      darkestHeader: "#8892b0",

    },
  },
  fonts: {
    primary: "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
    secondary: "Poppins, SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
    logo: "Poppins', -apple-system, system-ui, sans-serif",
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
        name: "about me",
        url: "/#about",
      },
      {
        name: "projects",
        url: "/#projects",
      },
      {
        name: "contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
