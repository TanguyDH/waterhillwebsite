import React from 'react'
import './ProductCarousel.scss';
import img from "../../../assets/img/Mes Images1522 copie.png"
import img2 from "../../../assets/img/Mes Images1523 copie.png"
import img3 from "../../../assets/img/Mes Images1524 copie.png"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
// import InfiniteCarousel from "react-leaf-carousel"


import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"


export default () => {
 
  return (
    <div className="ProductCarousel">
      <h3 className="ProductCarousel__title">
        <span> Nos clients ont aussi acheté :</span>
        <hr></hr>
      </h3>
      <div>
        <Carousel
          slidesPerPage={4}
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: true
            },
            900: {
              slidesPerPage: 2,
              arrows: true
            }
          }}
          arrows
          infinite
          autoPlay={5000}
          addArrowClickHandler
          arrowLeft={
            <div className="testimony__arrow testimony__arrow--next">
              <FaArrowAltCircleLeft />
            </div>
          }
          arrowRight={
            <div className="testimony__arrow testimony__arrow--prev">
              <FaArrowAltCircleRight />
            </div>
          }
        >
          <img alt='Anex Product' src={img} className="yours-custom-class" />
          <img alt='Anex Product' src={img2} className="yours-custom-class" />
          <img alt='Anex Product' src={img3} className="yours-custom-class" />
        </Carousel>
      </div>
    </div>
  )
}



// <InfiniteCarousel
//   animationDuration={1000}
//   breakpoints={[
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//   ]}
//   showSides={true}
//   swipe={true}
//   autoCycle={true}
//   sideSize={0.1}
//   slidesToScroll={1}
//   slidesToShow={3}
//   scrollOnDevice={true}
//   pagingSeparator={false}
//   prevArrow={
//     <div className="socialNetwork__arrow socialNetwork__arrow--next">
//       <FaArrowAltCircleLeft />
//     </div>
//   }
//   nextArrow={
//     <div className="socialNetwork__arrow socialNetwork__arrow--prev">
//       <FaArrowAltCircleRight />
//     </div>
//   }
// >