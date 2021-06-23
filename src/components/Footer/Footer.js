import React from "react"
import "./Footer.scss"
import Logo from "../../assets/img/logo.png"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import {Link} from 'gatsby';


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
          <Link to="/TermsAndConditions">
          <a>
             Conditions générales
          </a>
           </Link>
        </div>
      </div>

      <div className="Footer__contactus">
        <h4>Contactez-nous</h4>
        <div>
          <a rel="noopener noreferrer"
            target="_blank" href="mailto:contact@waterhill.be">contact@waterhill.be</a>
          <a rel="noopener noreferrer"
            target="_blank" href="tel:+32498119911">Téléphone : +32 498 11 99 11</a>
        
          <p>Lund - Vend 8h-22h, Sam 9h-18h</p>   
          
   
        </div>
      </div>

      
        
    </div>

      <div className="Footer__logo-box">
            <img className="Footer__logo" src={Logo} alt="logo" />
          </div>


    <div className="Footer__credit">
          <h4>Crédit photo</h4>
      <p>
      <a href="https://stocksnap.io/photo/green-trees-B11FE72D4B">Photo</a> by <a href="https://stocksnap.io/author/97">Jonas Nilsson Lee</a> on <a href="https://stocksnap.io">StockSnap</a> CCO | 
      Photo from VisionPic.net by Pexels | Photo by Dioww from Shutterstock | Photo by Martin Damboldt from Pexels | Photo by Seventyfour from Freepik | Photo by Artem Beliaikin from Pexels | Photo by Artem Beliaikin from Pexels 
       | Icons from icons8.com
       
      </p>

    </div>


 



   

   

    <div className="Footer__finish">
      ©WaterHill {new Date().getFullYear()}. Tous droits réservés.
    </div>

  </footer>
)

export default Footer;

