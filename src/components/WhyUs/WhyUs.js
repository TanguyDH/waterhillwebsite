import React from 'react'
import './WhyUs.scss';
import { MdModeEdit} from 'react-icons/md';
import { FaGem, FaHeart, FaSuitcase, FaRecycle, FaTruck } from "react-icons/fa"


export default () => {
  return (
    <div className="WhyUs">
      <h2 className="WhyUs__title">Pourquoi choisir WaterHill ?</h2>

      <div className="WhyUs__content">
        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <MdModeEdit />
          </div>
          <h4 className="WhyUs__word">SERVICE DE DESIGN </h4>
          <p className="WhyUs__p">
            Notre département graphisme peut vous aider à modifier votre
            étiquette actuelle ou à concevoir une nouvelle étiquette.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <FaGem />
          </div>
          <h4 className="WhyUs__word">CONTRÔLE DE QUALITE </h4>
          <p className="WhyUs__p">
            Chez Waterhill, nous inspectons chaque commande avant son expédition
            pour assurer à nos clients les meilleurs résultats possibles.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <FaHeart />
          </div>
          <h4 className="WhyUs__word">SERVICE CLIENT PREMIUM</h4>
          <p className="WhyUs__p">
            Nous sommes fiers de la longévité de nos relations avec nos clients
            et de gagner leur confiance au fil des années de collaboration.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <FaSuitcase />
          </div>
          <h4 className="WhyUs__word">ENTREPOSAGE</h4>
          <p className="WhyUs__p">
            Nos services d’entreposage vous permettent d’économiser de l’espace
            et de l’argent.
          </p>
        </div>

        <div className="WhyUs__item">
          <div className="WhyUs__icon">
            <FaRecycle />
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
            <FaTruck />
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
