import React from 'react'
import './Vision.scss';
import Carousel from './Carousel/Carousel';
import Box from './Box/Box';
import TextLoop from "react-text-loop"

export default () => {
  return (
    <div className="Vision">
      <h3 className="products__title">Le concept 
      {" "}
      <TextLoop>
         <span>Waterhill</span>
         <span></span>
      </TextLoop>
      </h3>
      <div className="Vision__content">
        <Carousel />
        <Box />
      </div>
    </div>
  )
}
