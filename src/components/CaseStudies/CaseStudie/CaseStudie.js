import React, { Component} from 'react';
import './CaseStudie.scss';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import {IoIosClose} from 'react-icons/io';
import logo from '../../../assets/img/logobentley.png';
import auto from '../../../assets/img/auto.jpg';
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
        return (
          <React.Fragment>
            <div onClick={this.openModal} className={className}>
              <img className="caseStudie__img" src={auto} alt="MainImage" />
              <div className="caseStudie__part2">
                <div>
                  <img className="caseStudie__logo" src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="Modal"
              overlayClassName="Overlay"
            >
              <button className="Modal__close" onClick={this.closeModal}>
                <IoIosClose />
              </button>
              <div className="Modal__content">
                <Carousel
                  className="Modal__images"
                  infinite
                  animationSpeed={800}
                  addArrowClickHandler
                  arrowLeft={
                    <div className="Modal__arrow Modal__arrow--next">
                      <FaArrowLeft />
                    </div>
                  }
                  arrowRight={
                    <div className="Modal__arrow Modal__arrow--prev">
                      <FaArrowRight />
                    </div>
                  }
                >
                  <img
                    className="Modal__image Modal__image--1"
                    src={bg}
                    alt="img"
                  />
                  <img
                    className="Modal__image Modal__image--2"
                    src={auto2}
                    alt="img"
                  />
                </Carousel>

                <div className="Modal__description">
                  <h3>Mercedes</h3>
                  <h4>Situation event</h4>
                  <p>
                    Donec congue placerat accumsan. Curabitur neque ligula,
                    ultricies ac convallis non, sagittis et orci. In id neque
                    eget mauris sodales pharetra pharetra eget odio. Fusce nibh
                    dui, porta a iaculis sit amet, dictum non nibh. Aliquam
                    lectus ligula, convallis ut est id, fermentum porta urna.
                    Quisque at rhoncus nisi. Sed urna{" "}
                  </p>
                  <p>
                    Donec congue placerat accumsan. Curabitur neque ligula,
                    ultricies ac convallis non, sagittis et orci. In id neque
                    eget mauris sodales pharetra pharetra eget odio. Fusce nibh
                    dui, porta a iaculis sit amet, dictum non nibh. Aliquam
                    lectus ligula, convallis ut est id, fermentum porta urna.
                    Quisque at rhoncus nisi. Sed urna{" "}
                  </p>

                  <Link className="Modal__button" to="contact">
                    Contact us
                  </Link>
                </div>
              </div>
            </Modal>
          </React.Fragment>
        )
    }
  
}


export default CaseStudie;
