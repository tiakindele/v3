import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Hero from "@components/sections/hero"
import About from "@components/sections/about"
import Interests from "@components/sections/interests"
import SEO from "@components/seo"
import { seoTitleSuffix, siteDescription, siteLanguage } from "@config"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  return (
    <Layout>
      <SEO
        title={
          useSeoTitleSuffix
            ? `${seoTitle} - ${seoTitleSuffix}`
            : `${seoTitle}`
          }
        description={siteDescription}
        lang={siteLanguage}
      />
      <Hero content={data.hero.edges[0].node}/>
      <About content={data.about.edges[0].node}/>
      <Interests content={data.interests.edges[0].node}/>
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
            emoji {
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
  }
`
