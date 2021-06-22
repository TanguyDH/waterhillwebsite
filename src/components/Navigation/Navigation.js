import React, { Component } from 'react'
import './Navigation.scss';
// import SelectCountry from '../SelelectCountry/SelelectCountry';
import SelectLanguage from "../SelectLanguage/SelectLanguage"

import logoWhite from '../../assets/img/WH_logo_R_text_White.png';
import logoBlue from "../../assets/img/logoLandscapeBlue.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'gatsby';
import { FaWhatsapp} from 'react-icons/fa';


class Navigation extends Component {
    state = {
        theposition: undefined
    }



    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }



    listenToScroll = () => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }
  render() {
    return (
      <div
        className="navigation"
        style={{
          backgroundColor:
            this.state.theposition > 0.005
              ? "white"
              : this.props.bg
              ? "white"
              : "",
          color:
            this.state.theposition > 0.005
              ? "#1a252f"
              : this.props.blue
              ? "#1a252f"
              : "white",
          boxShadow:
            this.state.theposition > 0.005
              ? "0.3px 0.3px 0px 0px rgba(12,34,66,0.09),5px 3px 50px 0px rgba(12,34,66,0.13)"
              : "",
        }}
      >
        <Link to="/">
          {this.state.theposition > 0.005 ? (
            <img src={logoBlue} alt="logo" className="navigation__logo" />
          ) : this.props.blue ? (
            <img src={logoBlue} alt="logo" className="navigation__logo" />
          ) : (
            <img src={logoWhite} alt="logo" className="navigation__logo" />
          )}
        </Link>
        <nav>
          <Link className="navigation__link" to="/products">
            produits
          </Link>
          <Link className="navigation__link" to="/commitment">
            engagement
          </Link>
          <Link className="navigation__link" to="/blog">
            blog
          </Link>
          <Link className="navigation__link" to="/faq">
            faq
          </Link>
          <Link
            style={{ color: this.state.theposition < 0.005 }}
            className="navigation__link"
            to="/contact"
          >
            NOUS CONTACTER
          </Link>

          <div
            style={{ color: this.state.theposition < 0.005 }}
            className="navigation__contact2"
          >
            <a className="navigation__tel" href="tel:+3281220440">
            +32 81 220 440
            </a>

            <strong>/</strong>
            <a
              href="https://api.whatsapp.com/send?phone=32489119911&text=Bonjour WaterHill! J’ai une question au sujet de .... "
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </nav>

        <div
          style={{ color: this.state.theposition < 0.005 }}
          className="navigation__plus"
        >
          
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/waterhill_water/"
          >
            <FaInstagram />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/waterhill.be/"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    )
  }
}


export default Navigation;


// <div style={{ margin: "0 10px" }}>
//             <SelectLanguage /> 
//           </div>