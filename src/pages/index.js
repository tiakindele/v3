import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/sections/hero"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node}/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/index/hero/"}}) {
      edges {
        node {
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
          rawMarkdownBody
        }
      }
    }
  }
`
