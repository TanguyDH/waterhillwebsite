import React from 'react'
import './ProductDescription.scss';

import ProductText from "./ProductText/ProductText"
import ProductCarousel from './ProductCarousel/ProductCarousel';
import ProductQuestion from'./ProductQuestion/ProductQuestion';
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductSelect from "./ProductSelect/ProductSelect";


export default (props) => {

  return (
    <div className="ProductDescription">
      <div className="ProductDescription__header">
        <span>Bouteilles {props.description1}</span>
        <span>
          à partir de <strong>{props.price}</strong>{" "}
        </span>
      </div>
      <div className="ProductDescription__main">
        <ProductGallery gallery={props.gallery} />
        <ProductSelect moq={props.moq} />
      </div>
      <ProductQuestion />
      <ProductCarousel />
      <ProductText article={props.article} />
    </div>
  )
}
