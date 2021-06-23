import React from 'react'
import './Blog.scss';
import Layout from '../../components/Layout/Layout';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from 'react-helmet' 
import {
  FacebookShareButton,
  FacebookIcon
} from "react-share"
import Img from "gatsby-image"
import ContactCircle from '../../components/ContactCircle/ContactCircle';

export const query = graphql`
         query($id: String!) {
           contentfulBlog(id: { eq: $id }) {
             id
             title
             article {
               json
             }
             mainImage {
               fluid(quality: 40, maxWidth: 1500) {
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
      <Layout bg={true} blue={true}>
      <Helmet title={props.data.contentfulBlog.title} defer={false} />

        <div className="blog">
          <h2 className="blog__title">{props.data.contentfulBlog.title}</h2>


             <Img
          className="blog__mainImage"
          fixed={props.data.contentfulBlog.mainImage.fluid}
           alt="img"
            />

          {documentToReactComponents(
            props.data.contentfulBlog.article.json,
            options
          )}
          <div className="blog__socialMedia">
          <h5>Partagez sur:</h5>
            <FacebookShareButton
              url={`https://tender-visvesvaraya-37b71d.netlify.com${props.location.pathname}`}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </div>
        </div>
        <ContactCircle />
      </Layout>
    )
}

export default Blog;