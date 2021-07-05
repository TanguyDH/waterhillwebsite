import React, { useState} from 'react'
import './PopupSample.scss';
import Modal from "react-modal";
import { FaRegCheckCircle} from 'react-icons/fa';
import { IoMdClose} from 'react-icons/io'
import axios from "axios"


export default (props) => {
  // const { productDispatch } = useContext(ProductContext)
//  const [props.popupSample, props.setPopupSample] = useState(true)
 

  const [name, setName] = useState('')
   const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [TVA, setTVA] = useState("")
    const [adress, setAdress] = useState("")
    const [numero, setNumero] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
     const [description, setDescription] = useState("")


  
    
  const sentForm = async () => {
      axios
        .post("/.netlify/functions/test", {
           name,
           phone,
           email,
           businessName,
           TVA,
           adress,
           numero,
           postalCode,
           city,
           description,
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
     
      <Modal
        isOpen={props.popupSample}
        onRequestClose={() => props.setPopupSample(false)}
        className="PopupSample__modal"
        overlayClassName="Overlay"
      >
       <div  className='PopupSample__title'>
           Un échantillon gratuit 
       </div>
       <div onClick={() => props.setPopupSample(false)} className='PopupSample__close'>
            <IoMdClose />
       </div>
      <div  className="PopupSample__intro">
        <h3>Bouteille {props.description} {props.description1}</h3>
        <img src={props.gallery[0].file.url} />
      </div>

       <div className='PopupSample__subTitle'>
           Vos données 
       </div>

       <div className='PopupSample__inputOne'>
           <div>
               <label>Nom de l'entreprise</label>
               <input
              type="text"
            //   placeholder="Nom de l'entreprise"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
               />
           </div>
       </div>

       <div className='PopupSample__inputOne'>
           <div>
               <label>TVA</label>
               <input
              type="text"
            //   placeholder="TVA"
              value={TVA}
              onChange={e => setTVA(e.target.value)}
               />
           </div>
       </div>



       <div className='PopupSample__inputTwo'>
           <div>
               <label>Prénom</label>
               <input
              type="text"
            //   placeholder="Prénom"
              value={name}
              onChange={e => setName(e.target.value)}
               />
           </div>
           <div>
               <label>Nom</label>
              <input
              type="text"
            //   placeholder="Nom"
              value={name}
              onChange={e => setName(e.target.value)}
               />
           </div>
       </div>

       <div className='PopupSample__inputTwo'>
           <div>
               <label>Adresse</label>
               <input
              type="text"
            //   placeholder="Adresse"
              value={adress}
              onChange={e => setAdress(e.target.value)}
               />
           </div>
           <div>
               <label>Numéro</label>
               <input
              type="text"
            //   placeholder="Numéro"
              value={numero}
              onChange={e => setNumero(e.target.value)}
               />
           </div>
       </div>


       <div className='PopupSample__inputTwo'>
           <div>
               <label>Code Postale</label>
               <input
              type="text"
            //   placeholder="Code Postale"
              value={postalCode}
              onChange={e => setPostalCode(e.target.value)}
               />
           </div>
           <div>
               <label>Ville</label>
               <input
              type="text"
            //   placeholder="Ville"
              value={city}
              onChange={e => setCity(e.target.value)}
               />
           </div>
       </div>

       <div className='PopupSample__inputTwo'>
           <div>
               <label>Adresse e-mail</label>
               <input
              type="text"
            //   placeholder="Adresse e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
           </div>
           <div>
               <label>Téléphone</label>
               <input
              type="text"
            //   placeholder="Téléphone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
               />
           </div>
       </div>


       <div className='PopupSample__marginBottom'></div>

       <div className='PopupSample__subTitle'>
           Détails de votre commande 
       </div>

       <div className='PopupSample__inputOne'>
           <div>
               <label>Détails de votre commande</label>
              <textarea
                type="text"
                // placeholder="Détails de votre commande"
                value={description}
                onChange={e => setDescription(e.target.value)}
               />
           </div>
       </div>


       <button>Demandez un échantillon</button>

   

      </Modal>
    </React.Fragment>
  )
}