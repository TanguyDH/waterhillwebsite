import React from 'react'
import './ProductGallery.scss';
import ImageGallery from "react-image-gallery"


export default (props) => {
    const images =  props.gallery.map(({ file }) => {
            const img = file.url
            return { original: img,thumbnail: img }
            
        });

    return (
      <div className="ProductGallery">
        <ImageGallery startIndex={0} items={images} />
        <button className="ProductGallery__button ProductGallery__button-1">
          Download my template
        </button>
        <button className="ProductGallery__button ProductGallery__button-1">
          <a
            href={props.doc[0].file.url}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Technical sheet
          </a>
        </button>
        <button className="ProductGallery__button ProductGallery__button-1">
          Download photos
        </button>
      </div>
    )
}
