import React, {useContext} from 'react'
import './ProductSelect.scss';
import { Link } from 'gatsby';
import Select from "react-select"
import ProductContext from '../../../context/ProductContext';
import ChooseColor from '../../UI/ChooseColor/ChooseColor';
import PopupRate from '../PopupRate/PopupRate';



export default (props) => {

  const { productState, productDispatch } = useContext(ProductContext);
  
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
    { value: "PP Transparent", label: "PP Transparent" },
    { value: "PP Full Colour", label: "PP Full Colour" },
  ]

  const modele = [
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VEGETALE-PET-390ml"
        >
          Bouteilles PLA végétal  390ml
       </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/VEGETALE-PET-390ml"
        >
          Bouteilles PLA végétal 390ml
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
        <Select options={modele} />
      </div>
      <div className="ProductSelect__moq">
        <span>Quantité minimale :</span>
        <p>{props.moq}</p>
      </div>
      <div>
        <span>Type de bouchon :</span>
        <Select options={plugType} />
      </div>
      <div>
        <span>Couleurs :</span>
        <ChooseColor colorsCap={onChangeColors()} />
      </div>
      <div>
        <span>Etiquette :</span>
        <Select options={label} />
      </div>
      <div>
        <span>Quantité :</span>
        <input
          className="ProductSelect__input"
          type="number"
          //  value={this.props.moq}
          placeholder={`${props.moq} - 10 000 unités`}
        />
      </div>
      <div className="ProductSelect__sample">
        <input type="checkbox" />
        <a>
         Voulez-vous tester cet article? Demandez un échantillon gratuit! *
        </a>
      </div>
      <div>
        <p className="ProductSelect__sparklingWater">
         Disponible en eau gazeuse *
        </p>
      </div>
      
  
        <PopupRate />
     
    </div>
  )
  
}

