
import React from 'react';
import './SocialNetwork.scss';
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import insta2 from "../../assets/img/socialNetwork/insta2.jpg"
import insta7 from "../../assets/img/socialNetwork/insta7.jpg";
import insta8 from "../../assets/img/socialNetwork/insta8.jpg"
import insta9 from "../../assets/img/socialNetwork/insta9.jpg"
import insta13 from "../../assets/img/socialNetwork/insta13.jpg"
import insta14 from "../../assets/img/socialNetwork/insta14.jpg"
import insta16 from "../../assets/img/socialNetwork/insta16.jpg";
import insta17 from "../../assets/img/BER_0510.jpg"
import insta18 from "../../assets/img/socialNetwork/insta17.jpeg"
import Slider from "react-slick";




const SocialNetwork = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <a
      href="https://www.instagram.com/waterhill_water/"
      target="_blank"
      className="socialNetwork"
      rel="noopener noreferrer"
    >
      <div className="socialNetwork__title">
        <div>instagram</div>
      </div>
      <Slider  {...settings}>
        <img className="socialNetwork__img" alt="instagram" src={insta18} />
        <img className="socialNetwork__img" alt="instagram" src={insta2} />
        <img className="socialNetwork__img" alt="instagram" src={insta7} />
        <img className="socialNetwork__img" alt="instagram" src={insta8} />
        <img className="socialNetwork__img" alt="instagram" src={insta9} />
        <img className="socialNetwork__img" alt="instagram" src={insta13} />
        <img className="socialNetwork__img" alt="instagram" src={insta16} />
        <img className="socialNetwork__img" alt="instagram" src={insta17} />
      </Slider>

    </a>
  )
}



export default SocialNetwork;



// import React from 'react';
// import './SocialNetwork.scss';
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
// import insta2 from "../../assets/img/socialNetwork/insta2.jpg"
// import insta7 from "../../assets/img/socialNetwork/insta7.jpg";
// import insta8 from "../../assets/img/socialNetwork/insta8.jpg"
// import insta9 from "../../assets/img/socialNetwork/insta9.jpg"
// import insta13 from "../../assets/img/socialNetwork/insta13.jpg"
// import insta14 from "../../assets/img/socialNetwork/insta14.jpg"
// import insta16 from "../../assets/img/socialNetwork/insta16.jpg";
// import insta17 from "../../assets/img/BER_0510.jpg"
// import insta18 from "../../assets/img/socialNetwork/insta17.jpeg"
// import InfiniteCarousel from 'react-leaf-carousel';
// import Slider from "react-slick";




//   const SocialNetwork = () => {
    
//     return (
//       <a
//         href="https://www.instagram.com/waterhill_water/"
//         target="_blank"
//         className="socialNetwork"
//         rel="noopener noreferrer"
//       >
//         <div className="socialNetwork__title">
//           <div>instagram</div>
//         </div>

//         <InfiniteCarousel
//           breakpoints={[
//             {
//               breakpoint: 500,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//               },
//             },
//             {
//               breakpoint: 768,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               },
//             },
//           ]}
//           showSides={true}
//           swipe={true}
//           autoCycle={true}
//           sideSize={0.1}
//           slidesToScroll={1}
//           slidesToShow={4}
//           scrollOnDevice={true}
//           pagingSeparator={false}
//           prevArrow={
//             <div className="socialNetwork__arrow socialNetwork__arrow--next">
//               <FaArrowLeft />
//             </div>
//           }
//           nextArrow={
//             <div className="socialNetwork__arrow socialNetwork__arrow--prev">
//               <FaArrowRight />
//             </div>
//           }
//         >
//           <img className="socialNetwork__img" alt="" src={insta18} />
//           <img className="socialNetwork__img" alt="" src={insta2} />
//           <img className="socialNetwork__img" alt="" src={insta7} />
//           <img className="socialNetwork__img" alt="" src={insta8} />
//           <img className="socialNetwork__img" alt="" src={insta9} />
//           <img className="socialNetwork__img" alt="" src={insta13} />
//           <img className="socialNetwork__img" alt="" src={insta14} />
//           <img className="socialNetwork__img" alt="" src={insta16} />
//           <img className="socialNetwork__img" alt="" src={insta17} />
//         </InfiniteCarousel>
//       </a>
//     )
//   }
 


// export default SocialNetwork;
