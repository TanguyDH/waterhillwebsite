import React from 'react'
import './TestimonyItem.scss';
import {IoMdStar} from "react-icons/io"
const TestimonyItem = (props) => {
    return (
      <div className="testimonyItem">
        <div className="testimonyItem__header" >
          <div className="testimonyItem__stars">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
        </div>
        <p className="testimonyItem__text">
          {props.text}
        </p>

        <div className="testimonyItem__pofile">
            <img className="testimonyItem__img" src={props.profil} alt='profil' />
            <p className="testimonyItem__name">{props.name}</p>   
          </div>
         
      </div>
    )
}

export default TestimonyItem;
