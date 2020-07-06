import React, { useState} from 'react'
import './PopupRate.scss';
import Modal from "react-modal";
import { FaRegCheckCircle} from 'react-icons/fa';
import { IoMdClose} from 'react-icons/io'
// import { sentForm} from '../../../../lib/functions';
import axios from "axios"






export default (props) => {
  // const { productDispatch } = useContext(ProductContext)
 const [modalState, setModal] = useState(false)

  const [name, setName] = useState('')
   const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

  
    
  const sentForm = async () => {
      axios
        .post("/.netlify/functions/test", {
          name: name,
          phone: phone,
          email: email,
          model: props.model,
          typeOfWater: props.typeOfWater,
          moq: props.moq,
          capType: props.capType,
          label: props.label,
          quantity: props.quantity,
          date: props.date,
          color: props.color
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })

    
  }

  return (
    <React.Fragment>
      <button
        className="PopupRate__button"
        onClick={e => {
          e.preventDefault()
          setModal(true)
        }}
      >
        {" "}
        Obtenir mon prix
      </button>
      <Modal
        isOpen={modalState}
        onRequestClose={() => setModal(false)}
        className="PopupRateM"
        overlayClassName="Overlay"
      >
        <div onClick={() => setModal(false)} className="PopupRate__close">
          <IoMdClose />
        </div>
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
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Téléphone</label>
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <button onClick={() => sentForm()}>Envoyer</button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}
