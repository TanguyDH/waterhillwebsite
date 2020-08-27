import React, {useState} from 'react';
import './Selection.scss';


export default (props) => {
    console.log('props.options', props.options)
    const [value, setValue] = useState(props.defaultValue[0].value)

  return (
    <div className='Selection'>
          {props.options.map((itme) => {
            return <div className={`Selection__item Selection__item${itme.value === value ?'--s' : ''}`} onClick={() =>{
              setValue(itme.value);
              if (itme.value === 'Bouchon sport') {
                 props.productDispatchSport()
              }
              if (itme.value === 'Bouchon classique') {
                props.productDispatchClassic()
              }
              if (itme.value === 'PP Transparent') { 
                props.productDispatchTransparentClassic()
              }
              if (itme.value === 'PP Metal') {
                props.productDispatchMetalClassic()
              }

              if (itme.value === 'PP Full Color') {
                props.productDispatchFullColorsClassic()
              }
              
              console.log(itme.value)
            }
            }>{itme.value}</div>
          })}
        
    </div>
  );
}

