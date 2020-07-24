import React from 'react'
import './Product.scss';
import {Link} from 'gatsby';
import { FaAngleRight } from "react-icons/fa"
import Img from "gatsby-image/withIEPolyfill"

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
        <p className="product__description">{props.description1}</p>
      </div>
     
    </div>
  </Link>
)

export default Product;
