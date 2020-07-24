import React from 'react'
import './Product.scss';
import Layout from '../../components/Layout/Layout';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ContactCircle from '../../components/ContactCircle/ContactCircle';

import { graphql } from "gatsby";

export const query = graphql`
         query($name: String!) {
           contentfulProduct(name: { eq: $name }) {
             name
             description1
             description
             price
             moq
           
             colorsCap {colors {hexa, color}}
            colorsCapClassic {colors {hexa, color}}
             colorsCapSport {colors {hexa, color}}

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
              capType    {capType{value, label}}
            questions {allQuestions {answer, question}  }
             doc {
               file {
                 url
               }
             }
              quantity {quantity {value, label}}
                quantityDefault {quantityDefault {label, value}}
               typeOfWater{ typeOfWater {label, value}}
               typeOfWaterDefault { typeOfWaterDefault {label, value}}
                label  {label {value, label}}
                 labelDefault  {labelDefault {value, label}}
                 capType {capType {label, value}}
         capTypeDefault {capTypeDefault {label, value}}
           }
         }
       `

 const Product = (props) => {
    return (
      <Layout  blue={true}>
        <ProductDescription
          pathname={props.location.pathname}
          article={props.data.contentfulProduct.article.json}
          description={props.data.contentfulProduct.description}
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
          capType={props.data.contentfulProduct.capType}
          quantity={props.data.contentfulProduct.quantity}
          quantityDefault={props.data.contentfulProduct.quantityDefault}
           typeOfWater={props.data.contentfulProduct.typeOfWater}
          typeOfWaterDefault={props.data.contentfulProduct.typeOfWaterDefault}
          label={props.data.contentfulProduct.label}
          labelDefault={props.data.contentfulProduct.labelDefault}
          capType={props.data.contentfulProduct.capType}
          capTypeDefault={props.data.contentfulProduct.capTypeDefault}
        />
        <ContactCircle />

      </Layout>
    )
} 

export default Product;