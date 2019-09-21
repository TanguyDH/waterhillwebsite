import React from 'react';
import './Blog.scss';
import {Link} from 'gatsby';
import Img from "gatsby-image"


export default (props) => {
  return (
    <Link to={`/blog/${props.id}`} className="Blog">
      <div className="Blog__box">
        <h3 className="Blog__title">{props.title}</h3>
        <div className="Blog__subject">
          <div className="Blog__author">
            <Img
             fluid={props.authorImage}
              className="Blog__authorImg"
            />
            <span>{props.author}</span>
          </div>
          <div className="Blog__category">{props.category}</div>
        </div>
        <div className="Blog__description">{props.description}</div>
      </div>

      <Img fluid={props.mainImage} className="Blog__img" />
    </Link>
  )
}
