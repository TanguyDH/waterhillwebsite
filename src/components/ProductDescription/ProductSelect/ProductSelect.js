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

  const plugType = [
    {
      value: <div>Bouchon classique</div>,
      label: (
        <div
          onClick={productDispatchClassic}
        >
          Bouchon classique
        </div>
      ),
    },
    {
      value: <sapn>Bouchon sport</sapn>,
      label: (
        <div
          onClick={productDispatchSport}
        >
          Bouchon sport
        </div>
      ),
    },
  ]

 


  const modele = [
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PLA-VEGETAL-390ml"
        >
       Bouteilles PLA 100% végétal 390ml  
       </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PLA-VEGETAL-390ml"
        >
        Bouteilles PLA 100% végétal 390ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VERRE-330ml"
        >
          Bouteilles VERRE 330ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VERRE-330ml"
        >
          Bouteilles VERRE 330ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VERRE-750ml"
        >
          Bouteilles VERRE 750ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VERRE-750ml"
        >
          Bouteilles VERRE 750ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/RPET-330ml"
        >
          Bouteilles RPET 330ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/RPET-330ml"
        >
         Bouteilles RPET 330ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/RPET-500ml"
        >
          Bouteilles RPET 500ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/RPET-500ml"
        >
          Bouteilles RPET 500ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/TETRAPAK-500ml"
        >
          Bouteilles TETRAPAK 500ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
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
                <div className="ProductDescription__bottleLink">
                  {onchangeName()}
                </div>
              ),
              label: (
                <div className="ProductDescription__bottleLink">
                  {onchangeName()}
                </div>
              ),
            },
          ]}
          options={modele}
        />
      </div>
      <div>
        <span>Type d'eau :</span>
        <Select defaultValue={props.typeOfWaterDefault.typeOfWaterDefault} options={props.typeOfWater.typeOfWater} />
       
      </div>
      <div className="ProductSelect__moq">
        <span>Quantité minimale :</span>
        <p>{props.moq}</p>
      </div>
      <div>
        <span>Type de bouchon :</span>
        <Select defaultValue={props.capTypeDefault.capTypeDefault} options={props.capType.capType} />
        
        {props.colorsCapSport.length === 0 ? (
          <div className="ProductSelect__plug">
            {props.pathname === "/product/PLA-VEGETAL-390ml"
              ? "Bouchon 100% végétal classique"
              : `Bouchon ${
                  props.pathname === "/product/VERRE-330ml" ||
                  props.pathname === "/product/VERRE-750ml"
                    ? "métal"
                    : ""
                } classique`}
          </div>
        ) : (
          <Select options={plugType} />
        )}
      </div>
      <div>
        <span>Couleur de bouchon :</span>
        <ChooseColor colorsCap={onChangeColors()} />
      </div>
      <div>
        <span>Etiquette :</span>
        <Select defaultValue={props.labelDefault.labelDefault} options={props.label.label} />
       
      </div>
      <div>
        <span>Quantité :</span>
        <Select
          onChange={(v) => console.log("Quantité", v)}
         options={props.quantity.quantity}
          />
      </div>
      <div>
        <span>Date de livraison souhaité :</span>
         <DatePicker />
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