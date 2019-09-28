import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const AboutImg = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "about-bg.png" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className="bg-cover h-64 w-48 absolute"
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  ></StaticQuery>
)
