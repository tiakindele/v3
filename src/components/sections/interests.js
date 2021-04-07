import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import Icon from "@components/icons/index"

const StyledInterestsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    padding: 0;
    margin: 0;
    overflow: hidden;
    list-style: none;
    column-gap: 1rem;
    row-gap: 1rem;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: var(--fz-md);
      border: 0.125rem solid ${({ theme }) => theme.colors.buttonBorder};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.colors.buttonTint};
    }
  }

  svg {
    width: 2.7rem;
    padding: 10px;
    color: ${({ theme }) => theme.colors.header};
  }
`;

const Interests = ({ content }) => {
  const { frontmatter, exports } = content;
  const interests = exports.interests;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledInterestsSection id="interests" ref={revealContainer}>
      <h2 className="section-heading">{frontmatter.title}</h2>

      <div className="inner">
        <StyledText>
          <ul className="skills-list">
            {interests && interests.map(
              ({ name, icon }, key) => <li key={key}><Icon name={icon} />{name}</li>
            )}
          </ul>
        </StyledText>
      </div>
    </StyledInterestsSection>
  );
};

export default Interests;
