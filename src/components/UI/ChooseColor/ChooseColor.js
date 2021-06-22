import React, { Component,useContext, useState} from 'react'
import './ChooseColor.scss';
import ProductContext from '../../../context/ProductContext';
import { IoMdCheckmark} from 'react-icons/io';
import ReactTooltip from 'react-tooltip'

const ChooseColor = (props) => {
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
        if (color.hexa === '') {
           return <span></span>
         }
        return (
          <p data-tip={color.color}  >
          <div
              onClick={() => onClickColor(color.hexa, index)}
            className="ChooseColor__item"
              style={{ backgroundColor: `${color.hexa}` }}
          >
              {colorSelect === color.hexa ? (
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

export default ChooseColor