import React, { Component ,useState } from 'react'
import './SideNavigation.scss';
import logo from '../../assets/img/blueLogo.png'; 
import Modal from "react-modal";
import { MdDragHandle} from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'gatsby';

export default () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='SideNavigation'>
      <img className='SideNavigation__logo' src={logo} alt='logo' />
      <div className='SideNavigation__hamburger' onClick={() => setSidebarOpen(true)}><span><MdDragHandle /></span></div>
      <Modal
        isOpen={sidebarOpen}
        onRequestClose={() => setSidebarOpen(false)}
        className="SideNavigation__modal"
        overlayClassName="Overlay"
      >

      <nav>
    hjbhjvj
          <Link className="SideNavigation__link" to="/products">
            produits
          </Link>
          <Link className="SideNavigation__link" to="/commitment">
            engagement
          </Link>
          <Link className="SideNavigation__link" to="/blog">
            blog
          </Link>
          <Link className="SideNavigation__link" to="/faq">
            faq
          </Link>
          <Link
            className="SideNavigation__link"
            to="/contact"
          >
            NOUS CONTACTER
          </Link>

          <div
            className="SideNavigation__contact2"
          >
            <a className="SideNavigation__tel" href="tel:+025243476">
              +32 489 11 99 11
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



