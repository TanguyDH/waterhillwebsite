import React from 'react'
import './ProductCarousel.scss';
import img from "../../../assets/img/annex/fridge.jpeg"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import InfiniteCarousel from "react-leaf-carousel"


export default () => {
 
  return (
    <div className="ProductCarousel">
      <h3 className="ProductCarousel__title">
        <span> Nos clients ont aussi acheté :</span>
        <hr></hr>
      </h3>
      <div>
        <InfiniteCarousel
          animationDuration={1000}
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ]}
          showSides={true}
          swipe={true}
          autoCycle={true}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={3}
          scrollOnDevice={true}
          pagingSeparator={false}
          prevArrow={
            <div className="socialNetwork__arrow socialNetwork__arrow--next">
              <FaArrowAltCircleLeft />
            </div>
          }
          nextArrow={
            <div className="socialNetwork__arrow socialNetwork__arrow--prev">
              <FaArrowAltCircleRight />
            </div>
          }
        >
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img} className="yours-custom-class" />
        </InfiniteCarousel>
      </div>
    </div>
  )
}
