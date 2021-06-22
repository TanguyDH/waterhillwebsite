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
              price
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
          <h3>Bouteille d'eau avec étiquette personnalisée</h3>
            <div className="productList__content">
                {
                    data.allContentfulProduct.edges.map(edge => {
                        return (
                          <Product
                            img={edge.node.mainImage.fluid}
                            description={edge.node.description}
                            description1={edge.node.description1}
                            name={edge.node.name}
                            price={edge.node.price}
                          />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductList

