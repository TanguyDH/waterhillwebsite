import React from 'react'
import './SocialNetwork.scss';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import insta1 from '../../assets/img/socialNetwork/insta1.jpg';
import insta2 from "../../assets/img/socialNetwork/insta2.jpg";
import insta3 from "../../assets/img/socialNetwork/insta3.jpg";
import insta4 from "../../assets/img/socialNetwork/insta4.jpg";
import insta5 from "../../assets/img/socialNetwork/insta5.jpg";
import insta6 from "../../assets/img/socialNetwork/insta6.jpg";
import InfiniteCarousel from 'react-leaf-carousel';


const SocialNetwork = () => {
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

      <InfiniteCarousel
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
        slidesToShow={4}
        scrollOnDevice={true}
        pagingSeparator={false}
        prevArrow={
          <div className="socialNetwork__arrow socialNetwork__arrow--next">
            <FaArrowLeft />
          </div>
        }
        nextArrow={
          <div className="socialNetwork__arrow socialNetwork__arrow--prev">
            <FaArrowRight />
          </div>
        }
      >
        <img className="socialNetwork__img" alt="" src={insta2} />

        <img className="socialNetwork__img" alt="" src={insta3} />

        <img className="socialNetwork__img" alt="" src={insta1} />

        <img className="socialNetwork__img" alt="" src={insta4} />

        <img className="socialNetwork__img" alt="" src={insta5} />

        <img className="socialNetwork__img" alt="" src={insta6} />
        <img className="socialNetwork__img" alt="" src={insta2} />

        <img className="socialNetwork__img" alt="" src={insta3} />

        <img className="socialNetwork__img" alt="" src={insta1} />

        <img className="socialNetwork__img" alt="" src={insta4} />

        <img className="socialNetwork__img" alt="" src={insta5} />

        <img className="socialNetwork__img" alt="" src={insta6} />
      </InfiniteCarousel>
    </a>
  )
 }
 export default SocialNetwork;
                                        
 

