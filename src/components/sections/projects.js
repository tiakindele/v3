import React, { useEffect, useRef } from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import Icon from "@components/icons/index";

const StyledProjectsSection = styled.section`
  .view-more {
    text-align: center;
    margin: 30px;

    .see-more-link {
      ${({ theme }) => theme.mixins.bigButton};
      margin-top: 50px;
    }
  }
`
const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tags-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.darkestHeader};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: ${({ theme }) => theme.colors.header};
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: ${({ theme }) => theme.colors.header};

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.primary};
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tags-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: ${({ theme }) => theme.colors.darkerHeader};
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: ${({ theme }) => theme.colors.darkerHeader};
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.colors.primary};

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 24px;
          height: 24px;
          margin-top: 0px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors.primary};
        transition: var(--transition);

        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.colors.link};
        }
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.buttonTint};
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: ${({ theme }) => theme.colors.buttonTint};
        mix-blend-mode: screen;

        @media (max-width: 768px) {
          mix-blend-mode: multiply;
        }
      }
    }

    .img {
      // border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.link};
  }
`;

const Projects = ({ content }) => {
  const sectionDetails = content[0].node.frontmatter
  const projects = content.slice(1, content.length)

  const revealTitle = useRef(null);
  const revealMore = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealMore.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig()));
  }, []);

  return (
    <StyledProjectsSection id="projects">
      <h2 className="section-heading" ref={revealTitle}>{sectionDetails.title}</h2>

      <StyledProjectsGrid>
        {projects &&
          projects.map((project, i) => {
            const { body, frontmatter } = project.node;
            const { title, emoji, github, external, tags, screenshot, category } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{emoji} {category}</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description"><MDXRenderer>{body}</MDXRenderer></div>

                    {tags.length && (
                      <ul className="project-tags-list">
                        {tags.map((tags, i) => (
                          <li className="highlighted-sm" key={i}>{tags}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link"><Icon name='github'/></a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link" className="external"><Icon name='external'/></a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage className="img" image={getImage(screenshot)} alt={title} />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </StyledProjectsSection>
  );
};

export default Projects;
