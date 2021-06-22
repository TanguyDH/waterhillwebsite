import React from 'react'
import './Product.scss';
import {Link} from 'gatsby';
import { FaAngleRight } from "react-icons/fa"
import Img from "gatsby-image/withIEPolyfill"
import Zoom from 'react-reveal/Zoom';

const Product = props => (
  <Link to={`product/${props.name}`} className="product">
    <div className="product__imgBox">
    <Img
      className="product__img"
      fluid={props.img}
      objectFit="contain"
      alt="bouteille"
    />
    </div>
    <div className="product__text-box">
      <div>
        <p className="product__title">{props.description}</p>
        <p className="product__description">
          <span>{props.description1}</span> 
          <span className="product__price">dès {props.price}</span>
          </p>
        <button>Obtenir mon prix</button>
      </div>
    </div>
  </Link>
)

export default Product;
