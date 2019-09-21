import React from 'react'
import './Products.scss';
import Product from './Product/Product';


import { FaAngleRight } from "react-icons/fa"
import TextLoop from "react-text-loop"
import { graphql, useStaticQuery, Link } from "gatsby"

const Products = () => {
 
 
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
      <div className="products">
        <h3 className="products__title">
          Water Hill,{" "}
          <TextLoop>
            <span>your drink partner.</span>
            <span>your communication tool.</span>
          </TextLoop>
        </h3>
        <div className="products__content">
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

        <Link to="/products" className="products__seeMore">
          <span>See More</span> <FaAngleRight className="products__icon" />
        </Link>
      </div>
    )
}

export default Products;

