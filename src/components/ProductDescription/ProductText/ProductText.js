import React from 'react'
import './ProductText.scss';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default (props) => {
  return (
    <div className="ProductText">
      <h3 className="ProductText__title">
        <span>Pour aller un peu plus loin :</span> <hr></hr>
      </h3>
      <div className="ProductText__text">
        {documentToReactComponents(props.article)}
      </div>
    </div>
  )
}
