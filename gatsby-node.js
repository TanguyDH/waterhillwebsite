
const path = require(`path`)



exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const productPostTemplate = path.resolve(
    `src/templates/Product/Product.js`
  )
  const blogPostTemplate = path.resolve(
    `src/templates/Blog/Blog.js`
  )

  // Individual products pages
  const products = graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              name
              mainImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

       result.data.allContentfulProduct.edges.forEach(({ node }) => {
        createPage({
          path: `/product/${node.name}`,
          component: productPostTemplate,
          context: {
            name: node.name,
          },
        })
      })
    })

  // Individual blogs
  const blogs = graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

       result.data.allContentfulBlog.edges.forEach(({ node }) => {
    
        createPage({
          path: `/blog/${node.id}`,
          component: blogPostTemplate,
          context: {
            id: node.id,
          },
        })
      })
    })

  return Promise.all([products, blogs ])
};





