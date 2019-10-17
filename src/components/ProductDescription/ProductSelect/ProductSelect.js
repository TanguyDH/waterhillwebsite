import React, {useContext} from 'react'
import './ProductSelect.scss';
import { Link } from 'gatsby';
import Select from "react-select"
import ProductContext from '../../../context/ProductContext';
import ChooseColor from '../../UI/ChooseColor/ChooseColor';




export default (props) => {

  const { dispatchDispatch } = useContext(ProductContext)



  const quantity = [
    { value: "Bouchon classique", label: "Bouchon classique" },
    { value: "Bouchon sport", label: "Bouchon sport" },
  ]

  const plugType = [
    {
      value: <div>Bouchon classique</div>,
      label: (
        <div
          onClick={() =>
            dispatchDispatch({
              type: "SELECT_SPORT",
            })
          }
        >
          Bouchon classique
        </div>
      ),
    },
    {
      value: <sapn>Bouchon sport</sapn>,
      label: (
        <div
          onClick={() =>
            dispatchDispatch({
              type: "SELECT_CLASSIC",
            })
          }
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
    },
    {
      value: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/végetales-PET-390ml"
        >
          Bouteilles végétales PET 390ml
                         </Link>
      ),
      label: (
        <Link
          className="ProductDescription__bottleLink"
          to="/product/végetales-PET-390ml"
        >
          Bouteilles végétales PET 390ml
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
          Bouteilles VERRE 500ml
                         </Link>
      ),
    },
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
        <ChooseColor />
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
          Want to test this article? Ask for a sample free! *
                         </a>
      </div>
      <div>
        <p className="ProductSelect__sparklingWater">
          available in sparkling water *
                         </p>
      </div>
      <button className="ProductSelect__button ProductSelect__button-2">
        Get my price
                       </button>
    </div>
  )
  
}

