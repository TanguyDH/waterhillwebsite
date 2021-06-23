import React, { Component,useContext, useState, useEffect} from 'react'
import './ChooseColor.scss';
import ProductContext from '../../../context/ProductContext';
import { IoMdCheckmark} from 'react-icons/io';
import ReactTooltip from 'react-tooltip'

const ChooseColor = (props) => {
  const [colorSelect, onChangeColor] = useState()
  const { productDispatch } = useContext(ProductContext);
  const onClickColor = (color, index, name) => {
    onChangeColor(color);
    productDispatch({
      type: "SELECT_COLOR",
      color: index,
      hexa: color,
      colorName: name
    })
    console.log(color)
  } 

useEffect(() => {
  productDispatch({
    type: "SELECT_COLOR",
    color: 0,
    hexa: props.colorsCap[0].hexa,
     colorName: props.colorsCap[0].color
  })
}, [])

  return (
    <div className="ChooseColor">
      {props.colorsCap.map((color, index) => {
        console.log(color)
        if (color.hexa === '') {
           return <span></span>
         }
        return (
          <p data-tip={color.color}  >
          <div
              onClick={() => onClickColor(color.hexa, index, color.color)}
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