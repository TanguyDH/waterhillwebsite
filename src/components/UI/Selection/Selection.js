import React, {useState} from 'react';
import './Selection.scss';


export default (props) => {
    console.log('props.options', props.options)
    const [value, setValue] = useState(props.defaultValue[0].value)

    const lengthOptions = props.options.length;
  return (
    <div className='Selection'>
          {props.options.map((item) => {
            return <div className={`Selection__item Selection__item${item.value === value ?'--s' : ''}`} onClick={() =>{
              setValue(item.value);
              if (lengthOptions > 1) {
              if (item.value === 'Bouchon sport') {
                 props.productDispatchSport()
              }
              if (item.value === 'Bouchon classique') {
                props.productDispatchClassic()
              }
            }
              // if (item.value === 'PP Transparent') { 
              //   props.productDispatchTransparentClassic()
              // }
              // if (item.value === 'PP Metal') {
              //   props.productDispatchMetalClassic()
              // }

              // if (item.value === 'PP Full Color') {
              //   props.productDispatchFullColorsClassic()
              // }
              
              console.log(item.value)
            }
            }>{item.value}</div>
          })}
        
    </div>
  );
}

