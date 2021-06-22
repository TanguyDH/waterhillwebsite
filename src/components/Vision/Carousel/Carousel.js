import React from 'react'
import './Carousel.scss';

import "mdbreact/dist/css/mdb.css"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from
  "mdbreact";


import ph1 from "../../../assets/img/bg3.jpg"
import ph2 from "../../../assets/img/bg4.jpg"
import video from '../../../assets/video/bottle.mp4'
export default () => {
  return (
    <div className="Carousel">
      <video width="750" height="500" autoPlay='autoPlay' loop='loop' muted  >
        <source src={video}
            type="video/mp4" />

            Sorry, your browser doesn't support embedded videos.
</video>
    </div>
  )
}



// <MDBContainer className="Carousel">
//   <MDBCarousel activeItem={1} length={2} showControls={false} interval={4000}>
//     <MDBCarouselInner>
//       <MDBCarouselItem itemId="1">
//         <img src={ph2} alt="carousel" />
//       </MDBCarouselItem>

//       <MDBCarouselItem itemId="2">
//         <img src={ph1} alt="carousel" />
//       </MDBCarouselItem>
//     </MDBCarouselInner>
//   </MDBCarousel>
// </MDBContainer>

// <Carousel autoPlay={10000} infinite animationSpeed={600}>
//   <img src={ph1} alt="carousel" />

//   <img src={ph2} alt="carousel" />

//   <img src={ph3} alt="carousel" />
// </Carousel>