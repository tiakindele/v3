import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { author } from "@config/index"

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90vh;

  h1 {
    margin: 0 0 10px 4px;
    font-size: clamp(24px, 5vw, 26px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    font-size: clamp(18px, 5vw, 20px);
    line-height: 1.6rem;
  }

  .email-link {
    background-color: transparent;
    border: 1px solid green;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 16px;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: grey;
      outline: none;
    }
    &:after {
      display: none !important;
    }
    margin-top: 50px;
    display: inline-block;
  }

  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`;

const Hero = ({ content }) => {
  const { frontmatter, body } = content
  const emoji = getImage(frontmatter.emoji)

  const one = <h1>{frontmatter.greetingPrefix} <GatsbyImage image={emoji} alt="Hello" /> {frontmatter.greetingSuffix}</h1>;
  const two = <h2 className="big-heading">{author}.</h2>;
  const three = <h3 className="big-heading">{frontmatter.subtitlePrefix} <span className="highlighted">{frontmatter.subtitleHighlight}</span>.</h3>;
  const four = (<MDXRenderer>{body}</MDXRenderer>);
  const five = (
    <a href="mailto:" className="email-link">
      {frontmatter.button}
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection id="hero">
      { items.map((item) => (<div>{item}</div>)) }
    </StyledHeroSection>
  );
};

export default Hero;
