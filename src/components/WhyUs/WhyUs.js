import React from 'react'
import './WhyUs.scss';
import { MdModeEdit} from 'react-icons/md';
import { FaGem, FaHeart, FaSuitcase, FaRecycle, FaTruck } from "react-icons/fa"
import TextLoop from "react-text-loop"
import delivery from '../../assets/img/WhyUs/delivery.gif'
import edit from '../../assets/img/WhyUs/edit.gif'
import heartInHand from '../../assets/img/WhyUs/heart-in-hand.gif'
import openBox from '../../assets/img/WhyUs/open-box.gif'
import orderCompleted from '../../assets/img/WhyUs/order-completed.gif'
import waste from '../../assets/img/WhyUs/waste.gif'


export default () => {
  return (
    <div className="WhyUs">
      <h2 className="products__title">Pourquoi
      {" "}
        <TextLoop>
          <span>nous choisir</span>
          <span>choisir WaterHill</span>
        </TextLoop>
        {" "}
        ?</h2>

      <div className="WhyUs__content">
        <div className="WhyUs__item">
          <div className="WhyUs__icon">
             <img src={edit} alt='icon DESIGN' />
          </div>
          <h4 className="WhyUs__word">SERVICE DE DESIGN </h4>
          <p className="WhyUs__p">
            Notre département graphisme peut vous aider à modifier votre
            étiquette actuelle ou à concevoir une nouvelle étiquette.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
         <img src={orderCompleted} alt='icon QUALITE' />
          </div>
          <h4 className="WhyUs__word">CONTRÔLE DE QUALITE </h4>
          <p className="WhyUs__p">
            Chez Waterhill, nous inspectons chaque commande avant son expédition
            pour assurer à nos clients les meilleurs résultats possibles.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
              <img src={heartInHand} alt='icon SERVICE CLIENT' />
          </div>
          <h4 className="WhyUs__word">SERVICE CLIENT PREMIUM</h4>
          <p className="WhyUs__p">
            Nous sommes fiers de la longévité de nos relations avec nos clients
            et de gagner leur confiance au fil des années de collaboration.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <img src={openBox} alt='icon ENTREPOSAGE' />
          </div>
          <h4 className="WhyUs__word">ENTREPOSAGE</h4>
          <p className="WhyUs__p">
            Nos services d’entreposage vous permettent d’économiser de l’espace
            et de l’argent.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
              <img src={waste} alt='icon RECYCLABLE' />
          </div>
          <h4 className="WhyUs__word"> MATERIAU 100% RECYCLABLE</h4>
          <p className="WhyUs__p">
            Nous travaillons uniquement avec des bouteilles en PET recyclables à
            100% et même avec des bouteilles 100% végétales, 100% biodégradables
            et compostables.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <img src={delivery} alt='icon livraison' />
          </div>
          <h4 className="WhyUs__word"> COMMANDE EXPRESS </h4>
          <p className="WhyUs__p">
            Vous avez un projet de dernière minute à réaliser en urgence ? Nous
            pouvons produire en 6 jours ouvrables !
          </p>
        </div>
      </div>
    </div>
  )
}
