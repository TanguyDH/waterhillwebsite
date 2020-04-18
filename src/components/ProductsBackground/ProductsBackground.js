import React from 'react'
import './ProductsBackground.scss';
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/img/mainBackground/bg6.jpg" }) {
        childImageSharp {
          fluid (quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      className="ProductsBackground"
    >
      <h2 className="ProductsBackground__title">
       Produits
      </h2>
    </BackgroundImage>
  )
}
