import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Hero from "@components/sections/hero"
import About from "@components/sections/about"
import Interests from "@components/sections/interests"
import Contact from "@components/sections/contact"
import Projects from "@components/sections/projects"
import SEO from "@components/seo"
import { seoTitleSuffix, siteDescription, siteLanguage, siteImage } from "@config"

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <Layout location={location}>
      <main className="fillHeight">
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
            }
          description={siteDescription}
          lang={siteLanguage}
          image={siteImage}
        />
        <Hero content={data.hero.edges[0].node}/>
        <About content={data.about.edges[0].node}/>
        <Interests content={data.interests.edges[0].node}/>
        <Projects content={data.projects.edges}/>
        <Contact/>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
    hero: allMdx(filter: {fileAbsolutePath: {regex: "/index/hero/"}}) {
      edges {
        node {
          body
          frontmatter {
            greetingPrefix
            greetingSuffix
            subtitlePrefix
            subtitleHighlight
            button
            heroEmoji {
              childImageSharp {
                gatsbyImageData(
                  width: 25,
                  placeholder: BLURRED,
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
    about: allMdx(filter: {fileAbsolutePath: {regex: "/index/about/"}}) {
      edges {
        node {
          body
          frontmatter {
            title
            skills
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED,
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
    interests: allMdx(filter: {fileAbsolutePath: {regex: "/index/interests/"}}) {
      edges {
        node {
          frontmatter {
            title
          }
          exports {
            interests {
              icon
              name
            }
          }
        }
      }
    }
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED,
                  formats: AUTO,
                  quality: 90
                )
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
  }
`
