import React, { Component ,useState } from 'react'
import './SideNavigation.scss';
import logo from '../../assets/img/logoLandscapeBlue.png'; 
import Modal from "react-modal";
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'gatsby';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

export default () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='SideNavigation'>
       <Link to='/'><img className='SideNavigation__logo' src={logo} alt='logo' /></Link>
      <div className='SideNavigation__hamburger' onClick={() => setSidebarOpen(true)}>
      <div>
          <div className="one"></div>
          <div className="two"></div>
      </div>
      </div>
      <Modal
        isOpen={sidebarOpen}
        onRequestClose={() => setSidebarOpen(false)}
        className="SideNavigation__modal"
        overlayClassName="Overlay"
      >

      <nav>
          <Link className="SideNavigation__link" to="/">
            Home
          </Link>
    
          <Link className="SideNavigation__link" to="/products">
            Produits
          </Link>
          <Link className="SideNavigation__link" to="/commitment">
            Engagement
          </Link>
          <Link className="SideNavigation__link" to="/blog">
            Blog
          </Link>
          <Link className="SideNavigation__link" to="/faq">
            Faq
          </Link>
          <Link
            className="SideNavigation__link"
            to="/contact"
          >
            NOUS CONTACTER
          </Link>
        
          <SelectLanguage />
         
          <div
            className="SideNavigation__contact2"
          >
            <a className="SideNavigation__tel" href="tel:+3281220440">
              +32 81 220 440
            </a>
            <strong>/</strong>
            <a
              href="https://api.whatsapp.com/send?phone=32489119911&text=Bonjour WaterHill! J’ai une question au sujet de .... "
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
      </nav>
          
      </Modal>
    </div>
  )
}



