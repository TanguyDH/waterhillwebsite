import React from 'react'
import './Carousel.scss';

import "mdbreact/dist/css/mdb.css"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from
  "mdbreact";


import ph1 from "../../../assets/img/bg3.jpg"
import ph2 from "../../../assets/img/bg4.jpg"

export default () => {
  return (
    <div>
      <MDBContainer className="Carousel">
        <MDBCarousel activeItem={1} length={2} showControls={false} interval={4000}>
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <img src={ph2} alt="carousel" />
            </MDBCarouselItem>
  
            <MDBCarouselItem itemId="2">
              <img src={ph1} alt="carousel" />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  )
}



// <Carousel autoPlay={10000} infinite animationSpeed={600}>
//   <img src={ph1} alt="carousel" />

//   <img src={ph2} alt="carousel" />

//   <img src={ph3} alt="carousel" />
// </Carousel>