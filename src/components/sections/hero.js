import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"

import { author } from "@config/index"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
    display: flex;
    font-family: var(--font-mono);

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
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }

  .gatsby-image-wrapper {
    width: unset;
    margin: 0px 12px 0px 3px;
  }
`;

const Hero = ({ content }) => {
  const { frontmatter, body } = content
  const emoji = getImage(frontmatter.emoji)

  const eControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      eControls.start({
        rotate: [20, 0, 40, 0, 30, 20, 20, 20, 20, 20, 20],
        transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
      })
    }
    pageLoadSequence()
  }, [eControls])

  const one = <h1>{frontmatter.greetingPrefix} <motion.div animate={eControls} style={{ originX: 0.7, originY: 0.9 }}> <GatsbyImage image={emoji} alt="Hello" /> </motion.div> {frontmatter.greetingSuffix}</h1>;
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
