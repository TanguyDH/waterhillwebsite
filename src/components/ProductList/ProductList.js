import React from 'react'
import './ProductList.scss';
import Product from './Product/Product';
import { graphql, useStaticQuery } from "gatsby";

const ProductList = () => {


    const data = useStaticQuery(graphql`
      query {
        allContentfulProduct(sort: { fields: order, order: ASC }) {
          edges {
            node {
              name
              description
              description1
              mainImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `)
    return (
        <div className="productList">
            <div className="productList__content">
                {
                    data.allContentfulProduct.edges.map(edge => {
                        return (
                          <Product
                            img={edge.node.mainImage.fluid}
                            description={edge.node.description}
                            description1={edge.node.description1}
                            name={edge.node.name}
                          />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductList

