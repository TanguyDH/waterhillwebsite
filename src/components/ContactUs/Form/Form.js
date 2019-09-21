import React from 'react';
import './Form.scss';

export default () => {
  return (
    <div className="Form">
      <div className="Form__content">
        <h4 className="Form__title">Contact</h4>
        <div className="Form__contact">
          <a>Phone +34 972 449 818</a>
          <a>whaterhill@whaterhill.com</a>
        </div>

        <div className="Form__form">
          <div className='Form__inputBox'>
            <label>Name *</label>
            <input type="text" placeholder='Name' />
          </div>

                  <div className='Form__inputBox'>
            <label>Phone *</label>
            <input type="text" placeholder='Phone' />
          </div>

                  <div className='Form__inputBox'>
             <label>Email *</label>
                    <input type="text" placeholder='Email' />
          </div>

                  <div className='Form__inputBox'>
                      <label>Comment</label>
                      <textarea type="text" placeholder='Comment' />
                      </div>

          <button className='Form__send'>Envoyer</button>
        </div>
      </div>
    </div>
  )
}
