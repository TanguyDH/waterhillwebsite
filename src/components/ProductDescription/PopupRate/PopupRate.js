import React, { useState} from 'react'
import './PopupRate.scss';
import Modal from "react-modal";
import { FaRegCheckCircle} from 'react-icons/fa';
import axios from 'axios';
export default () => {
  // const { productDispatch } = useContext(ProductContext)
 const [modalState, setModal] = useState(false)
  

  return (
    <React.Fragment>
      <button className="PopupRate__button" onClick={() => setModal(true)}>
        {" "}
        Obtenir mon prix
      </button>
      <Modal
        isOpen={modalState}
        onRequestClose={() => setModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="PopupRate">
          <div className="PopupRate__info">
            <div className="PopupRate__info-title">
              <span>6</span>
              <h3>
                bonnes raisons de <br></br>
                travailler avec nous
              </h3>
            </div>
            <div className="PopupRate__info-list">
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>SERVICE DE DESIGN </p>
              </div>
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>CONTRÔLE DE QUALITE </p>
              </div>
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>SERVICE CLIENT PREMIUM</p>
              </div>
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>ENTREPOSAGE</p>
              </div>
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>MATERIAU 100% RECYCLABLE</p>
              </div>
              <div>
                <span>
                  {" "}
                  <FaRegCheckCircle />
                </span>
                <p>COMMANDE EXPRESS </p>
              </div>
            </div>
          </div>
          <div className="PopupRate__form">
            <h3 className="PopupRate__title">Obtenir mon prix !</h3>
            <div>
              <label>Nom</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label>Téléphone</label>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <button onClick={() =>{

            }}>Envoyer</button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}
