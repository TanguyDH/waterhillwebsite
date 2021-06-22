import React, {useContext, useState} from 'react'
import './ProductSelect.scss';
import { Link } from 'gatsby';
import Select from "react-select"
import ProductContext from '../../../context/ProductContext';
import ChooseColor from '../../UI/ChooseColor/ChooseColor';
import PopupRate from '../PopupRate/PopupRate';
import PopupSample from '../PopupSample/PopupSample'
import DatePicker from '../../UI/DatePicker/DatePicker';
import Selection from '../../../components/UI/Selection/Selection';
import OrderInfo from './OrderInfo/OrderInfo';



export default (props) => {

  const [popupSample, setPopupSample] = useState(false)

  const { productState, productDispatch } = useContext(ProductContext);

  console.log('productState', productState)
  const [model, setModel] = useState('');
  const [typeOfWater, setTypeOfWater] = useState(props.typeOfWaterDefault.typeOfWaterDefault[0].value);
  const [capType, setCapType] = useState(props.capTypeDefault.capTypeDefault[0].value);
  const [label, setLabel] = useState(props.labelDefault.labelDefault[0].value);
  const [quantity, setQuantity] = useState('');

  console.log( model, typeOfWater, capType, label, quantity);


  const onchangeName = () => {
    if (props.pathname === '/product/PLA-VEGETAL-390ml') {
      return 'Bouteilles PLA 100% vegetal 390ml';
    }
    if (props.pathname === '/product/VERRE-330ml') {
      return 'Bouteilles VERRE 330ml';
    }
    if (props.pathname === '/product/VERRE-750ml') {
      return 'Bouteilles VERRE 750ml';
    }
    if (props.pathname === '/product/RPET-330ml') {
      return 'Bouteilles RPET 330ml';
    }
    if (props.pathname === '/product/RPET-500ml') {
      return 'Bouteilles RPET 500ml';
    }
    if (props.pathname === '/product/TETRAPAK-500ml') {
      return 'Bouteilles TETRAPAK 500ml';
    }
    else {
      return ''
    }
   

  }
  
  const onChangeColors = () => {
    if ( productState.sport) {
      return props.colorsCapSport;
    }
    else if (productState.classic) {
      return props.colorsCapClassic;
    }
    else {
      return props.colorsCap;
    }
  }



  const productDispatchSport = () => {
    productDispatch({
      type: "SELECT_SPORT",
    })
    productDispatch({
      type: "SELECT_COLOR",
      color: 0
    })
  }

  const productDispatchClassic = () => {
    productDispatch({
      type: "SELECT_CLASSIC",
    })
    productDispatch({
      type: "SELECT_COLOR",
      color: 0
    })
  }
  

  const productDispatchMetalClassic = () => {
    productDispatch({
      type: "SELECT_METALCLASSIC",
    })
  }

  const productDispatchTransparentClassic = () => {
    productDispatch({
      type: "SELECT_TRANSPATENTCLASSIC",
    })

  }



  const productDispatchFullColorsClassic = () => {
    productDispatch({
      type: "SELECT_FULLCOLORCLASSIC",
    })

  }
  

  const switchCap = props.pathname === "/product/RPET-330ml" || props.pathname === "/product/RPET-500ml" ? [productDispatchClassic, productDispatchSport] : [() => {}];

 


  const modele = [
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/PLA-VEGETAL-390ml"
        >
       Bouteilles PLA 100% végétal 390ml  
       </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/PLA-VEGETAL-390ml"
        >
        Bouteilles PLA 100% végétal 390ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/RPET-330ml"
        >
          Bouteilles RPET 330ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/RPET-330ml"
        >
          Bouteilles RPET 330ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/RPET-500ml"
        >
          Bouteilles RPET 500ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/RPET-500ml"
        >
          Bouteilles RPET 500ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/VERRE-330ml"
        >
          Bouteilles VERRE 330ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/VERRE-330ml"
        >
          Bouteilles VERRE 330ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/VERRE-750ml"
        >
          Bouteilles VERRE 750ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/VERRE-750ml"
        >
          Bouteilles VERRE 750ml
                         </Link>
      ),
    },
   
    {
      value: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/TETRAPAK-500ml"
        >
          Bouteilles TETRAPAK 500ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductSelect__bottleLink"
          to="/product/TETRAPAK-500ml"
        >
          TETRAPAK 500ml
                         </Link>
      ),
    }
  ]


 
  return (
    <form className="ProductSelect">
      <div>
        <span>Modèle : </span>
        <Select
          onChange={v => console.log(v)}
          defaultValue={[
            {
              value: (
                <div className="ProductSelect__bottleLink">
                  {onchangeName()}
                </div>
              ),
              label: (
                <div className="ProductSelect__bottleLink">
                  {onchangeName()}
                </div>
              ),
            },
          ]}
          options={modele}
          onChange={value => setModel(value.value.props.children)}
        />
      </div>
      <div>
        <span>Type d'eau : </span>
      
        <Selection
          defaultValue={props.typeOfWaterDefault.typeOfWaterDefault}
          options={props.typeOfWater.typeOfWater} 
          />
      </div>
   
      <div>
        <span>Type de bouchon :</span>

       
        <Selection
          defaultValue={props.capTypeDefault.capTypeDefault}
          productDispatchSport={productDispatchSport}
          productDispatchClassic={productDispatchClassic}
          options={props.capType.capType.map((capType, index) => {
            return {
              value: capType.value,
              label: <div onClick={switchCap[index]}>{capType.label}</div>,
            }
          })} />
      </div>
      <div>
        <span>Couleur de bouchon :</span>
        <ChooseColor colorsCap={onChangeColors()} />
      </div>
      <div>
        <span>Etiquette :</span>
     
        <Selection
         defaultValue={props.labelDefault.labelDefault}
          options={props.label.label} 
          // productDispatchMetalClassic={productDispatchMetalClassic}
          // productDispatchTransparentClassic={productDispatchTransparentClassic}
          // productDispatchFullColorsClassic={productDispatchFullColorsClassic}
          />
          
      </div>
      <div>
        <span>Quantité :</span>
        <Select
          onChange={value => setQuantity(value.value)}
          defaultValue={props.quantityDefault.quantityDefault}
          options={props.quantity.quantity}
        />
      </div>
      <div>
        <span>Date de livraison souhaité :</span>

        <DatePicker productDispatch={productDispatch} />
      </div>
     

      <PopupRate
        model={model}
        typeOfWater={typeOfWater}
        moq={props.moq}
        capType={capType}
        label={label}
        quantity={quantity}
        date={productState.date}
        color={productState.hexa}
      />

      <PopupSample popupSample={popupSample} setPopupSample={setPopupSample} description={props.description}   gallery={props.gallery} />

      <OrderInfo setPopupSample={setPopupSample} />
    </form>
  )
  
}


{/* <div className="ProductSelect__sample">
<input type="checkbox" />
<a>
  Voulez-vous tester cet article? Demandez un échantillon gratuit! *
</a>
</div> */}

// <Select
//   onChange={value => {
//     setTypeOfWater(value.value)
//   }}
//   defaultValue={props.typeOfWaterDefault.typeOfWaterDefault}
//   options={props.typeOfWater.typeOfWater}
// />

//   <Select
//     onChange={value => setLabel(value.value)}
//     defaultValue={props.labelDefault.labelDefault}
//     options={props.label.label}
//   />

// <Select
//   onChange={value => {
//     setCapType(value.value)
//   }}
//   defaultValue={props.capTypeDefault.capTypeDefault}
//   options={props.capType.capType.map((capType, index) => {
//     return {
//       value: capType.value,
//       label: <div onClick={switchCap[index]}>{capType.label}</div>,
//     }
//   })}
// />


// <div>
//   <p className="ProductSelect__sparklingWater">
//     {props.pathname === '/product/PLA-VEGETAL-390ml' ? '' : "Disponible en eau gazeuse *"}
//   </p>
// </div>




// <input
//   className="ProductSelect__input"
//   type="number"
//   //  value={this.props.moq}
//   placeholder={`${props.moq} - 10 000 unités`}
// />



     
