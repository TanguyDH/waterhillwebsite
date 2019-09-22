import React from "react"
import "./Footer.scss"
import Logo from "../../assets/img/logo.png"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
// import ChooseCountry from '../UI/ChooseCountry/ChooseCountry';



const Footer = () => (
  <footer className="Footer">
    <div className="Footer__content">
      <div className="Footer__newsletter">
        <h4>Newsletter</h4>
        <div className="Footer__inputbox">
          <input type="text" placeholder="Email" />
          <button>Send</button>
        </div>
        <div className="Footer__checkbox">
          <p>
            <input type="checkbox" />
            En utilisant ce formulaire, vous acceptez le stockage et le
            traitement de vos données par ce site. Politique de confidentialité
            du site Web.
          </p>
        </div>
        <div className="Footer__flag">
      choose
        </div>
      </div>

      <div className="Footer__box">
        <div className="Footer__joinus">
          <h4>Join Us</h4>
          <div>
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
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=0483139524&text=Bonjour WaterHill! J’ai une question au sujet de .... "
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="Footer__information">
          <h4>Information</h4>
          <a>Politique de cookie et confidentialité</a>
          <a>Conditions générales</a>
        </div>
      </div>

      <div className="Footer__contactus">
        <h4>Contact Us</h4>
        <div>
          <a>service@cruyffclassics.com</a>
          <a>Phone. +31(88) 773 64 40 </a>
          <p>Lund - Vend 8h-22h, Sam - Dim 9h-18h</p>
          <div className="Footer__logo-box">
            <img className="Footer__logo" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>

    <div className="Footer__finish">
      ©waterHill {new Date().getFullYear()}. Tous droits réservés.
    </div>
  </footer>
)

export default Footer;
