import React from 'react';
import './Form.scss';

export default () => {
  return (
    <div className="Form">
      <div className="Form__content">
        <h4 className="Form__title">Contact</h4>
        <div className="Form__contact">
          <a href="tel:+32489119911">Téléphone: +32 489 11 99 11</a>
          <a href="mailto:contact@waterhill.be">contact@waterhill.be</a>
        </div>

        <div className="Form__form">
          <div className="Form__inputBox">
            <label>Nom *</label>
            <input type="text" placeholder="Name" />
          </div>

          <div className="Form__inputBox">
            <label>Téléphone *</label>
            <input type="text" placeholder="Phone" />
          </div>

          <div className="Form__inputBox">
            <label>Email *</label>
            <input type="text" placeholder="Email" />
          </div>

          <div className="Form__inputBox">
            <label>Commentaire</label>
            <textarea type="text" placeholder="Comment" />
          </div>

          <button className="Form__send">Envoyer</button>
        </div>
      </div>
    </div>
  )
}
