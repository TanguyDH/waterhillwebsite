import React from 'react'
import './BlogList.scss'
import Blog from './Blog/Blog';
import { graphql, useStaticQuery } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlog {
          edges {
            node {
              id
              title
              date
              authorImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              author
              mainImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              description
              category
            }
          }
        }
      }
    `)
  return (
    <div className="BlogList">
      {data.allContentfulBlog.edges.map(edge => {
        return (
          <Blog
            title={edge.node.title}
            id={edge.node.id}
            date={edge.node.date}
            authorImage={edge.node.authorImage.fluid}
            author={edge.node.author}
            mainImage={edge.node.mainImage.fluid}
            description={edge.node.description}
            category={edge.node.category}
          />
        )
      })}
    </div>
  )
}
