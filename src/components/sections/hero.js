import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

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
    ;
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

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Tolu Akindele.</h2>;
  const three = <h3 className="big-heading">I build <span className="highlighted">things for the web.</span></h3>;
  const four = (
    <p>
      I'm a Vancouver-based full-stack developer who specializes in building exceptional web applications. Currently, I'm at LIVE WELL Exercise Clinic focused on creating and maintaining cutting edge software systems in the Health and Fitness space.
    </p>
  );
  const five = (
    <a href="mailto:" className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      { items.map((item) => (<div>{item}</div>)) }
    </StyledHeroSection>
  );
};

export default Hero;
