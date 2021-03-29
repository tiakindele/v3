import React from "react";
import PropTypes from 'prop-types';
import IconGithub from "./github";
import IconLinkedIn from "./linkedin";
import IconMail from "./mail";
import IconFigma from "./figma";
import IconReact from "./reactIcon";
import IconSpotify from "./spotify";
import IconWordpress from "./wordpress";

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