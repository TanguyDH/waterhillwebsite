import React, {useContext} from 'react'
import './ProductSelect.scss';
import { Link } from 'gatsby';
import Select from "react-select"
import ProductContext from '../../../context/ProductContext';
import ChooseColor from '../../UI/ChooseColor/ChooseColor';
import PopupRate from '../PopupRate/PopupRate';



export default (props) => {

  const { productState, productDispatch } = useContext(ProductContext);

  const onchangeName = () => {
    if (props.pathname === '/product/PLA-VEGETAL-390ml') {
      return 'Bouteilles pla vegetal 390ml';
    }
    if (props.pathname === '/product/VERRE-330ml') {
      return 'Bouteilles verre 330ml';
    }
    if (props.pathname === '/product/VERRE-750ml') {
      return 'Bouteilles verre 750ml';
    }
    if (props.pathname === '/product/TETRAPAK-500ml') {
      return 'Bouteilles tetrapak 500ml';
    }
    if (props.pathname === '/product/PET-330ml') {
      return 'Bouteilles pet 330ml';
    }
    if (props.pathname === '/product/PET-500ml') {
      return 'Bouteilles pet 500ml';
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
    { value: "PP Transparent", label: "PP Transparent" },
    { value: "PP Full Colour", label: "PP Full Colour" },
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
        <Select defaultValue={[{
          value: (
            <div
              className="ProductDescription__bottleLink"

            >
              {onchangeName()}
            </div>
          ),
          label: (
            <div
              className="ProductDescription__bottleLink"

            >
              {onchangeName()}
            </div>
          ),
        }]} options={modele} />
      </div>
      <div className="ProductSelect__moq">
        <span>Quantité minimale :</span>
        <p>{props.moq}</p>
      </div>
      <div>
        <span>Type de bouchon :</span>
        {props.colorsCapSport.length === 0 ? 
        <div className="ProductSelect__plug">
            {props.pathname === '/product/PLA-VEGETAL-390ml' ? 'Bouchon 100% végétal classique' : "Bouchon classique"} 
        </div> : <Select options={plugType} />}
      </div>
      <div>
        <span>Couleur de bouchon :</span>
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
          {props.pathname === '/product/PLA-VEGETAL-390ml' ? '' : "Disponible en eau gazeuse *"}  
        </p>
      </div>
      
  
        <PopupRate />
     
    </div>
  )
  
}

