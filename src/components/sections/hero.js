import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"
import { navDelay, loaderDelay } from '@utils';
import { author, email } from "@config"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 0;
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
    display: flex;
    font-family: ${({ theme }) => theme.fonts.secondary};

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.darkestHeader};
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

  .gatsby-image-wrapper {
    width: unset;
    margin: 0px 12px 0px 3px;
  }
`;

const Hero = ({ content }) => {
  const { frontmatter, body } = content;
  const [isMounted, setIsMounted] = useState(false);
  const heroEmoji = getImage(frontmatter.heroEmoji);
  const heroName = author;
  const heroEmail = "mailto:" + email;
  const eControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    const pageLoadSequence = async () => {
      eControls.start({
        rotate: [20, 0, 40, 0, 30, 20, 20, 20, 20, 20, 20],
        transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
      })
    }
    pageLoadSequence()
    return () => clearTimeout(timeout);
  }, [eControls])

  const one = (
    <h1>
      {frontmatter.greetingPrefix}
      <motion.div animate={eControls} style={{ originX: 0.7, originY: 0.9 }}>
        <GatsbyImage image={heroEmoji} alt="Hello" />
      </motion.div>
      {frontmatter.greetingSuffix}
    </h1>
  );
  const two = <h2 className="big-heading">{heroName}.</h2>;
  const three = (
    <h3 className="big-heading">
      {frontmatter.subtitlePrefix}
      <span className="highlighted-lg">{frontmatter.subtitleHighlight}</span>.
    </h3>
  );
  const four = (<MDXRenderer>{body}</MDXRenderer>);
  const five = (
    <a href={heroEmail} className="email-link">
      {frontmatter.button}
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection id="hero">
      <TransitionGroup component={null}>
        {isMounted &&
          items &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
