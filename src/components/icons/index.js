import React from "react"
import PropTypes from 'prop-types';
import IconGithub from "./github"
import IconLinkedIn from "./linkedin"
import IconMail from "./mail"

const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGithub color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "mail":
      return <IconMail color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon