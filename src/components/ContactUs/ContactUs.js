import React from 'react'
import './ContactUs.scss';
import Form from './Form/Form';
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
     query {
       file(relativePath: { eq: "assets/img/contact2.jpg" }) {
         childImageSharp {
           fluid {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
     }
   `)
  return (
    <div className='ContactUs'>

   <Form />

      <BackgroundImage fluid={data.file.childImageSharp.fluid} className='ContactUs__image'>
    </BackgroundImage>
      
    </div>
  )
}
