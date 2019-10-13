import React from 'react'
import "./BlogBackground.scss"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {

   const data = useStaticQuery(graphql`
     query {
       file(relativePath: { eq: "assets/img/blog2.jpeg" }) {
         childImageSharp {
           fluid {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
     }
   `)

    return (
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        className="BlogBackground"
      >
        <h2 className="BlogBackground__title">Blog.</h2>
      </BackgroundImage>
    )
}
