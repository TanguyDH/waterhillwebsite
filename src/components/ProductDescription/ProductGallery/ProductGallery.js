import React, { useContext } from 'react'
import './ProductGallery.scss';
import ProductContext from "../../../context/ProductContext"
import ImageGallery from "react-image-gallery"


export default (props) => {
  const { productState } = useContext(ProductContext);

    const images =  props.gallery.map(({ file }) => {
            const img = file.url
            return { original: img,thumbnail: img }
            
        });

  const galleryClassicCapImages = props.galleryClassicCap ? props.galleryClassicCap.map(({ file }) => {
    const img = file.url
    return { original: img, thumbnail: img }
  }) : [];

  const gallerySportCapImages = props.gallerySportCap
    ? props.gallerySportCap.map(({ file }) => {
        const img = file.url
        return { original: img, thumbnail: img }
      })
    : []


    const  selectImages = () => {
      if (productState.sport) {
        return galleryClassicCapImages
      }
      else if (productState.classic) {
        return gallerySportCapImages
       }else {
        return images
       }

   
  }

    return (
      <div className="ProductGallery">
        <ImageGallery startIndex={0} items={selectImages()} />
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
