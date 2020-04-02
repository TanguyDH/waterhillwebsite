import React from 'react';
import './Form.scss';
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

export default () => {
  return (
    <div className="Form">
      <div className="Form__content">
        <h4 className="Form__title">Contact</h4>
      
        <form 
          action="https://formspree.io/xzbvozar"
          method="POST"
        className="Form__form">
          <div className="Form__inputBox">
            <label>Nom *</label>
            <input name='name' type="text" placeholder="Name" />
          </div>

          <div className="Form__inputBox">
            <label>Téléphone *</label>
            <input name='phone' type="text" placeholder="Phone" />
          </div>

          <div className="Form__inputBox">
            <label>Email *</label>
            <input name='email' type="text" placeholder="Email" />
          </div>

          <div className="Form__inputBox">
            <label>Commentaire</label>
            <textarea name='comment' type="text" placeholder="Comment" />
          </div>

          <button type="submit" className="Form__send">Envoyer</button>
        </form>

        <div className="Form__or">
         <div></div>
          <span>OU</span>
         <div></div>
        </div>

        <div className="Form__others">
          <a href="https://api.whatsapp.com/send?phone=32489119911&text=Bonjour WaterHill! J’ai une question au sujet de .... "
            target="_blank"
            rel="noopener noreferrer"
            className="Form__whatsapp"
            ><IoLogoWhatsapp /></a>
          <a href="https://www.facebook.com/messages/t/162834650561379"
            target="_blank"
            rel="noopener noreferrer"
            className="Form__messenger"
            ><FaFacebookMessenger /></a>
          <a href="mailto:contact@waterhill.be"
            className="Form__mail"
          ><IoMdMail /></a>
        </div>


      </div>
    </div>
  )
}




  // <div className="Form__contact">
  //         <a href="tel:+32489119911">Téléphone: +32 81 220 440</a>
  //         <a href="tel:+32489119911">Mobile: + 32 489 11 99 11</a>
  //         <a href="mailto:contact@waterhill.be">contact@waterhill.be</a>
  //       </div>
