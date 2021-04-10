import React from 'react';
import styled from 'styled-components';
import { socials } from '@config/index';
import Icon from '@components/icons/index';

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const SocialHorizontal = () => (
  <StyledSocialLinks>
    <ul>
      {socials &&
        socials.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </ul>
  </StyledSocialLinks>
);

export default SocialHorizontal;
