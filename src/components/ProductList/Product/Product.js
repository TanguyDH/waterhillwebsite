// import React from 'react'
// import './Product.scss';
// import Img from "gatsby-image/withIEPolyfill"
// import {Link} from 'gatsby';

// const Product = props => (
//   <Link to={`product/${props.name}`} className="Product">
//     <Img className="Product__img" objectFit="contain" fluid={props.img} alt="bouteille" />
//     <div className="Product__text-box">
//       <div>
//         <p className="Product__title">{props.description}</p>
//         <p className="Product__description">{props.description1}</p>
//       </div>
//     </div>
//   </Link>
// )

// export default Product;


import React from 'react'
import './Product.scss';
import Img from "gatsby-image/withIEPolyfill"
import { Link } from 'gatsby';

const Product = props => (
  <Link to={`/product/${props.name}`} className="Product">
    <div className="Product__imgBox">
      <Img className="Product__img" objectFit="contain" fluid={props.img} alt="bouteille" />
    </div>
    <div className="Product__text-box">
      <div>
        <p className="Product__title">{props.description}</p>
        <p className="Product__description">{props.description1}</p>
      </div>
    </div>
  </Link>
)

export default Product;
