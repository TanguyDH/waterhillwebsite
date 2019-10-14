import React from 'react'
import './Blog.scss';
import Layout from '../../components/Layout/Layout';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
import Img from "gatsby-image"

export const query = graphql`
         query($id: String!) {
           contentfulBlog(id: { eq: $id }) {
             id
             title
             article {
               json
             }
             mainImage {
               fluid {
                 ...GatsbyContentfulFluid
               }
             }
           }
         }
       `


const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        console.log(node);
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
      
        return <img alt={alt} src={url} />
      }
    }
  }
    return (
      <Layout>
      
          <Img
            className="blog__mainImage"
            fixed={props.data.contentfulBlog.mainImage.fluid}
            alt="img"
          />
        

        <div className="blog">
          <h2 className="blog__title">{props.data.contentfulBlog.title}</h2>
          {documentToReactComponents(
            props.data.contentfulBlog.article.json,
            options
          )}
     
          </div>
       
          
      </Layout>
    )
}

export default Blog;