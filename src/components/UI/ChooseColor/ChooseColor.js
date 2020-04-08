import React, { Component,useContext, useState} from 'react'
import './ChooseColor.scss';
import ProductContext from '../../../context/ProductContext';
import { IoMdCheckmark} from 'react-icons/io';
import ReactTooltip from 'react-tooltip'

export default (props) => {
  const [colorSelect, onChangeColor] = useState('')
  const { productDispatch } = useContext(ProductContext);
  const onClickColor = (color, index) => {
    onChangeColor(color);
    productDispatch({
      type: "SELECT_COLOR",
      color: index,
      hexa: color
    })
    console.log(color)
  } 

  return (
    <div className="ChooseColor">
      {props.colorsCap.map((color, index) => {
         if(color === '') {
           return <span></span>
         }
        return (
          <p data-tip="blanc" data-background-color="#fff" data-place="bottom">
          <div
            onClick={() => onClickColor(color, index)}
            className="ChooseColor__item"
            style={{ backgroundColor: `${color}` }}
          >
            {colorSelect === color ? (
              <span>
                <IoMdCheckmark />
              </span>
            ) : (
                ""
              )}
          </div>
            <ReactTooltip  />
          </p>
        )
      })}
    </div>
  )
}
