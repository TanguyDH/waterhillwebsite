import React, { Component } from 'react'
import "./SelelectCountry.scss"
import Modal from "react-modal"
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import belgium from  '../../assets/img/flags/belgium.png';
import france from "../../assets/img/flags/france.png"
import luxembourg from "../../assets/img/flags/luxembourg.png"
import netherlands from "../../assets/img/flags/netherlands.png"
import { IoMdClose} from 'react-icons/io';

export default () => {
  return (
    <div className="SelectCountry">
      <select>
        <option>male</option>
        <option>female</option>
        <option>others</option>
      </select>  
    </div>
  )
}

