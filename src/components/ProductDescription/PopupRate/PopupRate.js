import React, {useContext, useState} from 'react'
import './PopupRate.scss';
import Modal from "react-modal";
import ProductContext from '../../../context/ProductContext';
import { FaRegCheckCircle} from 'react-icons/fa';

export default () => {
  const { productDispatch } = useContext(ProductContext)
 const [modalState, setModal] = useState(false)
  

  return (
    <React.Fragment>
      <button className='PopupRate__button' onClick={() => setModal(true)} > Obtenir mon prix</button>
      <Modal
        isOpen={modalState}
        onRequestClose={() => setModal(false)}
       
          className="Modal"
          overlayClassName="Overlay"
      >
       <div className='PopupRate'>
      
              <div className='PopupRate__info'>
                  <div className='PopupRate__info-title'>
                   <span>6</span>
                   <h3>
                   bonnes raisons de <br></br>
                    travailler avec nous          
                   </h3>
                 </div>
                  <div className='PopupRate__info-list' >
                    <div>
                          <span> <FaRegCheckCircle /></span>
                          <p>Exclusivement réservé aux revendeurs</p>
                    </div>
                    <div>
                            <span> <FaRegCheckCircle /></span>
                          <p>Exclusivement réservé aux revendeurs</p>
                    </div>
                    <div>
                            <span> <FaRegCheckCircle /></span>
                          <p>Exclusivement réservé aux revendeurs</p>
                    </div>
                    <div>
                 
                        <span> <FaRegCheckCircle /></span>
                      <p>Exclusivement réservé aux revendeurs</p>
                      </div>
                    <div>
                            <span> <FaRegCheckCircle /></span>
                          <p>Exclusivement réservé aux revendeurs</p>
                    </div>
              <div>
                <span> <FaRegCheckCircle /></span>
                <p>Exclusivement réservé aux revendeurs</p>
              </div>
                 </div>
              </div>
              <div className='PopupRate__form'>
                  <h3 className='PopupRate__title'>Obtenir mon prix</h3>
                  <div>
                     <label>Nom</label>
                      <input type='text' placeholder='Name' />
                  </div>
                  <div>
                  <label>Téléphone</label>
                      <input type='text' placeholder='Phone' />
                  </div>
                  <div>
                      <label>Email</label>
                      <input type='text' placeholder='Email' />
                  </div>
                
                  <button>Envoyer</button>
              </div>
       </div>
      </Modal>
    </React.Fragment>
  )
}
