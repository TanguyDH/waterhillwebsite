import React from 'react'
import './Vision.scss';
import Carousel from './Carousel/Carousel';
import Box from './Box/Box';

export default () => {
  return (
    <div className="Vision">
      <h3 className="Vision__title">Le concept Waterhill</h3>
      <div className="Vision__content">
        <Carousel />
        <Box />
      </div>
    </div>
  )
}
