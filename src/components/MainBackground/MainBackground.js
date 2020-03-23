import React from 'react'
import './MainBackground.scss';
import "react-count-animation/dist/count.min.css"
import waveTop from '../../assets/img/wave-top.png';
import waveMid from "../../assets/img/wave-mid.png"
import waveBot from "../../assets/img/wave-bot.png"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { Link } from 'gatsby';
import GraindeDeVie from '../../assets/img/mainBackground/logoGraine.png';
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"



const  MainBackground = () =>  {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "assets/img/mainBackground/bg4.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "assets/img/mainBackground/bg5.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
 

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
              <BackgroundImage
                fluid={data.image1.childImageSharp.fluid}
                className="mainBackground__background1"
              >
                <div className="mainBackground__content"></div>
              </BackgroundImage>

              <BackgroundImage
                fluid={data.image2.childImageSharp.fluid}
                className="mainBackground__background2"
              >
                <div className="mainBackground__content">
                  <div>
                    <img className="mainBackground__logoGraine" src={GraindeDeVie} alt='Logo Graine de vie' />
                   
                    <Link className="mainBackground__button2" to="commitment">
                      Plus d'info
                    </Link>
                  </div>
                </div>
              </BackgroundImage>

              <BackgroundImage
               fluid={data.image1.childImageSharp.fluid}
               className="mainBackground__background3">
                
                <div className="mainBackground__content">
                  <div> 
                     <h3>
                      Fabricant d'eau depuis<br></br>
                      <br></br>2007.
                    </h3>
                  </div>
                </div>
              </BackgroundImage>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    )
  }


// ;<video autoPlay loop src={Video} />
export default MainBackground;







// <div className="one">1</div>
//   <div>
//     <div className="two">Nous compensons</div>
//     <div>
//       <div className="null">00%</div>
//       <div className="four">
//         <div>de notre empreinte</div>
//         <div>carbone.</div>
//       </div>
//     </div>
//   </div>



// <div className="mainBackground__logoGraindeDeVie">
//                     <a href="https://grainedevie.org/" target="__blank">
//                       <img
//                         className="logo"
//                         src={GraindeDeVie}
//                         alt="GraindeDeVie Logo"
//                       />
//                     </a>
//                   </div>











// <h3>
//   Nous compensons <br></br>{" "}
//   <span
//     style={{
//       fontWeight: "Bold"
//     }}
//   >
//     100%
//                       </span>{" "}
//   <br></br>de notre empreinte carbone.
//                     </h3>
//   <div>
//     <div>
//       <span className="mainBackground__number">2400</span>
//       <span className="mainBackground__legend">
//         Nbr d'arbres plantés
//                         </span>
//     </div>
//     <div>
//       <span className="mainBackground__number">240K</span>
//       <span className="mainBackground__legend">
//         Nbr de CO2 compensé
//                         </span>
//     </div>
//   </div>