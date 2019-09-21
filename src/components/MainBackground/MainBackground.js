import React from 'react'
import './MainBackground.scss';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import AnimationCount from "react-count-animation"
import "react-count-animation/dist/count.min.css"
import waveTop from '../../assets/img/wave-top.png';
import waveMid from "../../assets/img/wave-mid.png"
import waveBot from "../../assets/img/wave-bot.png"

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { Link } from 'gatsby';
import GraindeDeVie from '../../assets/img/transparent-GDV.png';
import Video from '../../assets/img/mainBackground/bgVideo.mp4';



const  MainBackground = () =>  {
 

  const settings = {
    start: 1500,
    count: 3000,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up',
  };
  const settings2 = {
    start: 1522,
    count: 54524,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up',
  };

    return (
      <React.Fragment>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage: `url(${waveTop})`,
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage: `url(${waveMid})`,
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: `url(${waveBot})`,
              }}
            ></div>
          </div>

          <div className="mainBackground">
            <Carousel
              className="mainBackground__carousel"
              autoPlay={990000}
              infinite
              animationSpeed={800}
              addArrowClickHandler
              arrowLeft={
                <div className="mainBackground__arrow mainBackground__arrow--next">
                  <FaArrowAltCircleLeft />
                </div>
              }
              arrowRight={
                <div className="mainBackground__arrow mainBackground__arrow--prev">
                  <FaArrowAltCircleRight />
                </div>
              }
            >
              <div className="mainBackground__background1">
                <div className="mainBackground__content"></div>
              </div>

              
              <div
                className="mainBackground__background2"
              >
                <div className="mainBackground__content">
                  <div className="mainBackground__logoGraindeDeVie">
                    <a href="https://grainedevie.org/" target="__blank">
                      <img
                        className="logo"
                        src={GraindeDeVie}
                        alt="GraindeDeVie Logo"
                      />
                    </a>
                  </div>
                  <div>
                    <h3>
                      <div className="one">1</div>
                      <div>
                        <div className="two">Nous compensons</div>
                        <div>
                          <div className="null">00%</div>
                          <div className="four">
                            <div>de notre empreinte</div>
                            <div>carbone.</div>
                          </div>
                        </div>
                      </div>
                    </h3>
                    <div>
                      <div>
                        <span className="mainBackground__number">
                          {" "}
                          15000
                        </span>
                        <span className="mainBackground__legend">
                          Nbr d'arbres plantés
                        </span>
                      </div>
                      <div>
                        <span className="mainBackground__number">
                          {" "}
                         15400
                        </span>
                        <span className="mainBackground__legend">
                          Nbr de CO2 compensé
                        </span>
                      </div>
                    </div>
                    <Link className="mainBackground__button2" to="commitment">
                      Plus d'info
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mainBackground__background3">
                <video autoPlay loop src={Video} />
                <div className="mainBackground__content">
                  <div> </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    )
  }



export default MainBackground;







// query {
//   file(relativePath: { eq: "assets/img/mainBackground/bg1.jpg" }) {
//     childImageSharp {
//       fluid {
//                    ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// }
//         }

