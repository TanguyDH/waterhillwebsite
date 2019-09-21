import React from 'react'
import './Vision.scss';
import Carousel from './Carousel/Carousel';
import Box from './Box/Box';

export default () => {
  return (
    <div className="Vision">
      <h3 className="Vision__title">WaterHill Concept</h3>
      <div className="Vision__content">
        <Carousel />
        <Box />
      </div>
    </div>
  )
}
