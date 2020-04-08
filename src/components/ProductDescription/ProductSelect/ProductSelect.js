import React, {useContext, useState} from 'react'
import './ProductSelect.scss';
import { Link } from 'gatsby';
import Select from "react-select"
import ProductContext from '../../../context/ProductContext';
import ChooseColor from '../../UI/ChooseColor/ChooseColor';
import PopupRate from '../PopupRate/PopupRate';
import DatePicker from '../../UI/DatePicker/DatePicker';





export default (props) => {

  const { productState, productDispatch } = useContext(ProductContext);
  console.log('productState', productState);
  const [model, setModel] = useState('');
  const [typeOfWater, setTypeOfWater] = useState('');
  const [capType, setCapType] = useState('');
  const [label, setLabel] = useState('');
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
    <div className="ProductSelect">
      <div>
        <span>Modèle :</span>
        <Select
          onChange={(v) => console.log(v)}
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
          onChange={(value) => setModel(value.value.props.children)}
        />
      </div>
      <div>
        <span>Type d'eau :</span>
        <Select onChange={(value) => { setTypeOfWater(value.value)}} defaultValue={props.typeOfWaterDefault.typeOfWaterDefault} options={props.typeOfWater.typeOfWater} />
       
      </div>
      <div className="ProductSelect__moq">
        <span>Quantité minimale :</span>
        <p>{props.moq}</p>
      </div>
      <div>
        <span>Type de bouchon :</span>
   
        <Select onChange={(value) => { setCapType(value.value)}} defaultValue={props.capTypeDefault.capTypeDefault} 
          options={props.capType.capType.map((capType, index) => {
            
            return {
              value: capType.value,
              label: <div onClick={switchCap[index]} >{capType.label}</div>
            }
          })} 
          />
      
      </div>
      <div>
        <span>Couleur de bouchon :</span>
        <ChooseColor colorsCap={onChangeColors()} />
      </div>
      <div>
        <span>Etiquette :</span>
        <Select onChange={(value) => setLabel(value.value)} defaultValue={props.labelDefault.labelDefault} options={props.label.label} />
       
      </div>
      <div>
        <span>Quantité :</span>
        <Select
          onChange={(value) => setQuantity(value.value)}
         options={props.quantity.quantity}
          />
      </div>
      <div>
        <span>Date de livraison souhaité :</span>
     
        <DatePicker productDispatch={productDispatch} />
      
      </div>
      <div className="ProductSelect__sample">
        <input type="checkbox" />
        <a>
          Voulez-vous tester cet article? Demandez un échantillon gratuit! *
        </a>
      </div>

      <PopupRate />
    </div>
  )
  
}



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



     
