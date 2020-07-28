import React, {useReducer} from 'react'
import './ProductDescription.scss';

import ProductText from "./ProductText/ProductText"
import ProductQuestion from'./ProductQuestion/ProductQuestion';
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductSelect from "./ProductSelect/ProductSelect";
import ProductCarousel from './ProductCarousel/ProductCarousel';
import productReducer from "../../reducers/product"
import ProductContext from "../../context/ProductContext"
import moment from 'moment'


export default (props) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    sport: false,
    classic: false,
    hexa: '',
    date: moment().add('days', 7)._d
  }
)

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      <div className="ProductDescription">
        <div className="ProductDescription__header">
          <span>Bouteilles {props.description} {props.description1}</span>
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
          <ProductSelect capType={props.capType} capTypeDefault={props.capTypeDefault} label={props.label} labelDefault={props.labelDefault} typeOfWater={props.typeOfWater} typeOfWaterDefault={props.typeOfWaterDefault} quantity={props.quantity} quantityDefault={props.quantityDefault} pathname={props.pathname} capType={props.capType}   colorsCapSport={props.colorsCapSport} colorsCapClassic={props.colorsCapClassic} colorsCap={props.colorsCap} moq={props.moq} />
        </div>
     <ProductQuestion questions={props.questions} />


        <ProductCarousel />


        <ProductText article={props.article} />
      
      </div>
    </ProductContext.Provider>
  )
}
