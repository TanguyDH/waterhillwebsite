import React, { Component} from 'react';
import './CaseStudie.scss';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import {IoIosClose} from 'react-icons/io';
import bg from "../../../assets/img/bg4.jpg"
import auto2 from '../../../assets/img/auto2.jpg';
import {Link} from 'gatsby';

import Modal from "react-modal";
Modal.setAppElement("#___gatsby");


class CaseStudie extends Component {
  state = {
    modalIsOpen: false
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
   

    render(){
        const className = `caseStudie ${
          this.props.index === 1 ? "caseStudie--1" : ""
        }`
      const className2 = `${
        this.props.index > 6 ? "caseStudie__none" : ""
        }`

        return (
          <React.Fragment>
            <div onClick={this.openModal} className={`${className} ${this.props.toggle ? "" : className2}`}>
              <div className="caseStudie__img" >
               <img src={this.props.mainImage} alt="MainImage" />
              </div>
              <div className="caseStudie__part2">
                
                  <img className="caseStudie__logo" src={this.props.logo} alt="logo" />
                
              </div>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="Modal"
              overlayClassName="Overlay"
            >
              <img className="Modal__imgModal" src={this.props.mainImage} alt="MainImage" />
              <span onClick={this.closeModal} className='Modal__close' ><IoIosClose /></span>
            </Modal>
          </React.Fragment>
        )
    }
  
}


export default CaseStudie;




// <button className="Modal__close" onClick={this.closeModal}>
//   <IoIosClose />
// </button>
//   <div className="Modal__content">
//     <Carousel
//       className="Modal__images"
//       infinite
//       animationSpeed={800}
//       addArrowClickHandler
//       arrowLeft={
//         <div className="Modal__arrow Modal__arrow--next">
//           <FaArrowLeft />
//         </div>
//       }
//       arrowRight={
//         <div className="Modal__arrow Modal__arrow--prev">
//           <FaArrowRight />
//         </div>
//       }
//     >
//       <img
//         className="Modal__image"
//         src={bg}
//         alt="img"
//       />
//       <img
//         className="Modal__image"
//         src={auto2}
//         alt="img"
//       />
//     </Carousel>

//     <div className="Modal__description">
//       <h3>{this.props.brandName}</h3>
//       <h4>Situation event</h4>
//       <p>
//         Donec congue placerat accumsan. Curabitur neque ligula,
//         ultricies ac convallis non, sagittis et orci. In id neque
//         eget mauris sodales pharetra pharetra eget odio. Fusce nibh
//         dui, porta a iaculis sit amet, dictum non nibh. Aliquam
//         lectus ligula, convallis ut est id, fermentum porta urna.
//                     Quisque at rhoncus nisi. Sed urna{" "}
//       </p>
//       <p>
//         Donec congue placerat accumsan. Curabitur neque ligula,
//         ultricies ac convallis non, sagittis et orci. In id neque
//         eget mauris sodales pharetra pharetra eget odio. Fusce nibh
//         dui, porta a iaculis sit amet, dictum non nibh. Aliquam
//         lectus ligula, convallis ut est id, fermentum porta urna.
//                     Quisque at rhoncus nisi. Sed urna{" "}
//       </p>

//       <Link className="Modal__button" to="contact">
//         Contact us
//                   </Link>
//     </div>
//   </div>