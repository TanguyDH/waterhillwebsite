import React from 'react'
import './Products.scss';
import Product from './Product/Product';


import { FaAngleRight } from "react-icons/fa"
import TextLoop from "react-text-loop"
import { graphql, useStaticQuery, Link } from "gatsby"

const Products = () => {
 
 
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct(sort: { fields: order, order: ASC}, limit: 6) {
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
      <div className="products">
       
        <h3 className="products__title">
          <span>Water Hill,</span>
          <TextLoop>
            <span>votre partenaire boissons</span>
            <span>votre outil de communication</span>
          </TextLoop>
        </h3>
        <div className="products__content">
          {data.allContentfulProduct.edges.map(edge => {
            return (
              <Product
                img={edge.node.mainImage.fluid}
                description={edge.node.description}
                description1={edge.node.description1}
                price={edge.node.price}
                name={edge.node.name}
              />
            )
          })}
        </div>

        <Link to="/products" className="products__seeMore">
          <span>VOIR PLUS</span> <FaAngleRight className="products__icon" />
        </Link>
      </div>
    )
}

export default Products;

