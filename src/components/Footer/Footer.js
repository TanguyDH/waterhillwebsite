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
          <button>Envoyer</button>
        </div>
        <div className="Footer__checkbox">
          <p>
            <input type="checkbox" />
            En utilisant ce formulaire, vous acceptez le stockage et le
            traitement de vos données par ce site. Politique de confidentialité
            du site Web.
          </p>
        </div>
       
      </div>

      <div className="Footer__box">
        <div className="Footer__joinus">
          <h4>Rejoignez-nous</h4>
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
        <h4>Contactez-nous</h4>
        <div>
          <a href="mailto:contact@waterhill.be">contact@waterhill.be</a>
          <a href="tel:+3281220440">Téléphone : +32 81 220 440</a>
          <a href="tel:+32489119911">Mobile : +32 489 11 99 11</a>
          <p>Lund - Vend 8h-22h, Sam 9h-18h</p>
          <div className="Footer__logo-box">
            <img className="Footer__logo" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>

    <div className="Footer__finish">
      ©WaterHill {new Date().getFullYear()}. Tous droits réservés.
    </div>
  </footer>
)

export default Footer;
