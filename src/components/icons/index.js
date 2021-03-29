import React from "react";
import PropTypes from 'prop-types';
import IconGithub from "@components/icons/github";
import IconLinkedIn from "@components/icons/linkedin";
import IconMail from "@components/icons/mail";
import IconFigma from "@components/icons/figma";
import IconReact from "@components/icons/reactIcon";
import IconSpotify from "@components/icons/spotify";
import IconWordpress from "@components/icons/wordpress";

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