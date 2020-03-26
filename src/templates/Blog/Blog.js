import React from 'react'
import './Blog.scss';
import Layout from '../../components/Layout/Layout';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share"
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
          <div className="blog__socialMedia">
          <h5>Partagez sur:</h5>
            <FacebookShareButton
              url={`https://tender-visvesvaraya-37b71d.netlify.com${props.location.pathname}`}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </div>
        </div>
      </Layout>
    )
}

export default Blog;