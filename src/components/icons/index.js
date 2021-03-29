import React from "react";
import PropTypes from 'prop-types';
import IconGithub from "./Github";
import IconLinkedIn from "./Linkedin";
import IconMail from "./Mail";
import IconFigma from "./Figma";
import IconReact from "./ReactIcon";
import IconSpotify from "./Spotify";
import IconWordpress from "./Wordpress";

const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGithub color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "mail":
      return <IconMail color={color} />
    case "figma":
      return <IconFigma color={color} />
    case "react":
      return <IconReact color={color} />
    case "spotify":
      return <IconSpotify color={color} />
    case "wordpress":
      return <IconWordpress color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon