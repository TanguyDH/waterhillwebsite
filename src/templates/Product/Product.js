import React from 'react'
import './Product.scss';
import Layout from '../../components/Layout/Layout';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import { graphql } from "gatsby";

export const query = graphql`
         query($name: String!) {
           contentfulProduct(name: { eq: $name }) {
             name
             description1
             price
             moq
             article {
               json
             }
             gallery {
               file {
                 url
               }
             }
             gallerySportCap {
               file {
                 url
               }
             }
             galleryClassicCap {
               file {
                 url
               }
             }
             doc {
               file {
                 url
               }
             }
           }
         }
       `

 const Product = (props) => {
    return (
      <Layout blue={true}>
        <ProductDescription
          article={props.data.contentfulProduct.article.json}
          description1={props.data.contentfulProduct.description1}
          gallery={props.data.contentfulProduct.gallery}
          galleryClassicCap={props.data.contentfulProduct.galleryClassicCap}
          gallerySportCap={props.data.contentfulProduct.gallerySportCap}
          price={props.data.contentfulProduct.price}
          moq={props.data.contentfulProduct.moq}
          doc={props.data.contentfulProduct.doc}
        />
      </Layout>
    )
} 

export default Product;