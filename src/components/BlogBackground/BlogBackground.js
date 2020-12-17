import React from 'react'
import "./BlogBackground.scss"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {

   const data = useStaticQuery(graphql`
     query {
       file(relativePath: { eq: "assets/img/blog.jpg" }) {
         childImageSharp {
           fluid(quality: 100, maxWidth: 1920) {
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
        <span>Photo by Artem Beliaikin from Pexels</span>
      </BackgroundImage>
    )
}
