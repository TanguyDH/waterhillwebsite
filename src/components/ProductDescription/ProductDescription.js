import React, {useReducer, useState} from 'react'
import './ProductDescription.scss';

import ProductText from "./ProductText/ProductText"
// import ProductCarousel from './ProductCarousel/ProductCarousel';
import ProductQuestion from'./ProductQuestion/ProductQuestion';
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductSelect from "./ProductSelect/ProductSelect";
import productReducer from "../../reducers/product"
import ProductContext from "../../context/ProductContext"


export default (props) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    sport: false,
    classic: false
  }
)
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      <div className="ProductDescription">
        <div className="ProductDescription__header">
          <span>Bouteilles {props.description1}</span>
          <span>
            à partir de <strong>{props.price}</strong>
          </span>
        </div>
        <div className="ProductDescription__main">
          <ProductGallery
            doc={props.doc}
            gallery={props.gallery}
            galleryClassicCap={props.galleryClassicCap}
            gallerySportCap={props.gallerySportCap}
          />
          <ProductSelect plugType={props.plugType}  colorsCapSport={props.colorsCapSport} colorsCapClassic={props.colorsCapClassic} colorsCap={props.colorsCap} moq={props.moq} />
        </div>
        <ProductQuestion />

        <ProductText article={props.article} />
      
      </div>
    </ProductContext.Provider>
  )
}
