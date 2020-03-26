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
  // console.log('sisisisisiisis', props.capType);
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
    if (props.pathname === '/product/PET-330ml') {
      return 'Bouteilles PET 330ml';
    }
    if (props.pathname === '/product/PET-500ml') {
      return 'Bouteilles PET 500ml';
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

  const quantity = [
    { value: "Bouchon classique", label: "Bouchon classique" },
    { value: "Bouchon sport", label: "Bouchon sport" },
  ]

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

  const label = [
    { value: props.pathname === '/product/PLA-VEGETAL-390ml' ? "Transparent 100% BIODÉGRADABLE" : "PP Transparent", label: props.pathname === '/product/PLA-VEGETAL-390ml' ? "Transparent 100% BIODÉGRADABLE" : "PP Transparent" },
    { value: props.pathname === '/product/PLA-VEGETAL-390ml' ? "Full Color 100% BIODÉGRADABLE" : "PP Full Color", label: props.pathname === '/product/PLA-VEGETAL-390ml' ? "Full Color 100% BIODÉGRADABLE" : "PP Full Color" },
  ]
  const water = [
    { value: "Eau plate", label:"Eau plate" },
     { value: "Eau gazeuse", label: "Eau gazeuse" }
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
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PET-330ml"
        >
          Bouteilles PET 330ml
          </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PET-330ml"
        >
          Bouteilles PET 330ml
                         </Link>
      ),
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PET-500ml"
        >
          Bouteilles PET 500ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/PET-500ml"
        >
          Bouteilles PET 500ml
                         </Link>
      ),
    }
  ]
  return (
    <div className="ProductSelect">
      <div>
        <span>Modèle :</span>
        <Select
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
        {props.pathname === "/product/PLA-VEGETAL-390ml" ? (
          <div className="ProductSelect__plug">Eau plate</div>
        ) : (
          <Select
            defaultValue={[{ value: "Eau plate", label: "Eau plate" }]}
            options={water}
          />
        )}
      </div>
      <div className="ProductSelect__moq">
        <span>Quantité minimale :</span>
        <p>{props.moq}</p>
      </div>
      <div>
        <span>Type de bouchon :</span>
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
        {props.pathname === "/product/TETRAPAK-500ml" ? (
          <div className="ProductSelect__plug">Impression full color 360°</div>
        ) : (
          <Select
            defaultValue={[
              {
                value:
                  props.pathname === "/product/PLA-VEGETAL-390ml"
                    ? "Full Color 100% BIODÉGRADABLE"
                    : "PP Full Color",
                label:
                  props.pathname === "/product/PLA-VEGETAL-390ml"
                    ? "Full Color 100% BIODÉGRADABLE"
                    : "PP Full Color",
              },
            ]}
            options={label}
          />
        )}
      </div>
      <div>
        <span>Quantité :</span>
        <Select options={props.quantity.quantity} />
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