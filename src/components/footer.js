import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: var(--fz-sm);
  line-height: 1;

  a {
    padding: 10px;
  }
`;

const getYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit tabindex="-1">
        <a
          href="https://github.com/tiakindele/v3"
          target="_blank"
          rel="noopener noreferrer">
          © {getYear()} Tolu Akindele
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
