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
             plugType {sport, classic}
             colorsCap {colors}
            colorsCapClassic {colors}
             colorsCapSport {colors}
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
            questions {allQuestions {answer, question}  }
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
          colorsCap={props.data.contentfulProduct.colorsCap.colors}
          colorsCapClassic={props.data.contentfulProduct.colorsCapClassic.colors}
          colorsCapSport={props.data.contentfulProduct.colorsCapSport.colors}
          questions={props.data.contentfulProduct.questions}
          plugType={props.data.contentfulProduct.plugType}
        />
      </Layout>
    )
} 

export default Product;