import React from 'react'
import './Testimony.scss';
import TestimonyItem from './TestimonyItem/TestimonyItem';
import Slider from "react-slick";
// import video from '../../assets/video/Cascade - 7334 (1).mp4';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import boris from '../../assets/img/testimony/boris.jpg';
import elisabeth from '../../assets/img/testimony/elisabeth.jpg';
import geraldine from '../../assets/img/testimony/geraldine.jpg';
import serge from "../../assets/img/testimony/serge.jpg"
import Leslie from "../../assets/img/testimony/Leslie.png"
import caroline from "../../assets/img/testimony/caroline.jpg"
import profile from "../../assets/img/testimony/profile.png"
import TextLoop from "react-text-loop"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"



class Testimony extends React.Component {
  items = [<TestimonyItem />, <TestimonyItem />, <TestimonyItem />, <TestimonyItem />];

  state = {
    galleryItems: this.items.map((i) => (<h2 key={i}>{i}</h2>))
  }

  thumbItem = (item, i) => (
    <item key={i} />
  )
    
    render() {
      // const responsive = {
      //   0: { items: 1 },
      //   1024: { items: 3 },
      // }
      // var settings = {
      //   dots: false,
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 1400,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true
      //       }
      //     },
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
      //   // nextArrow: <SampleNextArrow />,
      //   // prevArrow: <SamplePrevArrow />
      // };
    
      return (
        <div className="testimony">
         
          <div className="testimony__content">
            <h3 className="products__title">
              <TextLoop>
                <span>ON PARLE</span>
                <span>QUE PENSENT-ILS</span>
              </TextLoop>
              {" "} 
               DE NOUS 
              {" "}
              <TextLoop>
                <span>!</span>
                <span>?</span>
              </TextLoop>
              </h3>

            <Carousel
              slidesPerPage={3}
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
              <TestimonyItem
                text="« Waterhill s’adapte toujours à notre demande et à notre budget, et ce tout en offrant un produit personnalisé de qualité. Je vous les recommande ! »"
                name="Géraldine S. – D’Ieteren"
                profil={geraldine}
              />
              <TestimonyItem
                text="« Service très professionnel et suivi sérieux au moment de la livraison.Nous sommes entièrement satisfaits des services proposés par Waterhill »"
                name="Caroline Michaux"
                profil={caroline}
              />
              <TestimonyItem
                text="« Cette société est très professionnelle tant du point de vue produits, livraison, disponibilité et marketing. J’ai toujours reçu un très bel accueil et un service impeccable. Je la recommande vivement à tout professionnel ! »"
                name="Elisabeth S. – Sixt Belgium"
                profil={elisabeth}
              />
              <TestimonyItem
                text="C’est ma dernière semaine chez JMM, j’en profite pour te dire que j’ai fortement apprécié notre collaboration durant ces 4 années ! »"
                name="Boris R. – Jean-Michel Martin BMW/Mini"
                profil={boris}
              />
              <TestimonyItem
                text="« Merci pour vos superbes produits. Les canettes ont été un vrai succès . Nous serions ravis de pouvoir collaborer à nouveau avec vous. »"
                name="Leslie B. – Flexybeauty"
                profil={Leslie}
              />
              <TestimonyItem
                text="« C’était parfait comme service et encore merci ! Je ne manquerai de recommander vos produits et services ! »"
                name="Serge C. – UCM"
                profil={serge}
              />
               <TestimonyItem
                text = "«Les bouteilles d’eau personnalisées apportent un « wow effect » auprès de nos clients. Les bouteilles d’eau sont appréciées et véhiculent une image très positive. Nous avons passé différentes commandes à Waterhill. »"
                name=""
                profil={profile}
              />
              
            </Carousel>
          </div>

         
        </div>
      )
    }
 
}

export default Testimony;




// <Slider  {...settings}>





// <div className="testimony__bg">
//   <video autoPlay loop className="testimony__video" src={video} >

//   </video>
// </div>