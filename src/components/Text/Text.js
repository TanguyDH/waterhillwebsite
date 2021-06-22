import React from 'react';
import './Text.scss';


export default (props) => {
  return (
      <div className='TextText'>

          <h3>{props.title}</h3>

          {props.children}
    
    </div>
  );
}
