import React, {useState} from 'react';
import './ContactCircle.scss';
import { FaComments, FaFacebookMessenger, FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import { IoIosClose} from 'react-icons/io'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

export default function componentName() {
    const [toggle, setToggle] = useState(false)
  return (
      <div className='ContactCircle'>

      <Fade bottom>
      <a
          href="https://www.facebook.com/messages/t/162834650561379"
          target="_blank"
          rel="noopener noreferrer"
        style={{ display: toggle ? 'block' : 'none' }} className='ContactCircle__secondary ContactCircle__secondary--1'>
        <span> <FaFacebookMessenger /></span>
          </a>
      <a
          href="https://api.whatsapp.com/send?phone=32489119911&text=Bonjour WaterHill! J’ai une question au sujet de .... "
          target="_blank"
          rel="noopener noreferrer"
       style={{ display: toggle ? 'block' : 'none' }} className='ContactCircle__secondary ContactCircle__secondary--2'>
        <span> <FaWhatsapp /></span>
         </a>
        <a href="mailto:contact@waterhill.be" style={{ display: toggle ? 'block' : 'none' }} className='ContactCircle__secondary ContactCircle__secondary--3'>
        <span> <FaEnvelope /></span>
       </a>
      </Fade>

          <div className='ContactCircle__button' onClick={() => setToggle(!toggle)}>
        {toggle ? <span><Rotate bottom right> <IoIosClose /> </Rotate></span> : <span > <FaComments /></span>}
          </div>
        
    </div>
  );
}
