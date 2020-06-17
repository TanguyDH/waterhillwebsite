import React from 'react'
import one from '../../assets/img/ProductInfo/1.jpg';
import two from '../../assets/img/ProductInfo/2.jpg';
import three from '../../assets/img/ProductInfo/3.jpg';
import './ProductInfo.scss';

const ProductInfo = () => {
    return (
        <div className='ProductInfo' >
            <div className='ProductInfo__item'>
                <img src={one}  />
             <div className='ProductInfo__text'>
                    <h3>WATERHILL, une eau légèrement minéralisée</h3>
                    <p>L’eau de Waterhill se caractérise par une légère minéralisation par rapport à bon nombre d’eaux minérales naturelles (148mg/L en résidu sec à 180°C). Elle convient dès lors à toute la famille, du nourrisson aux grands-parents.</p>
              </div>
            </div>
            <div className='ProductInfo__item'>
              
                <div className='ProductInfo__text'>
                    <h3>WATERHILL, une eau légèrement minéralisée</h3>
                    <p>L’eau de Waterhill se caractérise par une légère minéralisation par rapport à bon nombre d’eaux minérales naturelles (148mg/L en résidu sec à 180°C). Elle convient dès lors à toute la famille, du nourrisson aux grands-parents.</p>
              </div>
                <img src={two} />
            </div>
            <div className='ProductInfo__item'>
                <img src={three} />
                <div className='ProductInfo__text'>
                    <h3>WATERHILL, une eau légèrement minéralisée</h3>
                    <p>L’eau de Waterhill se caractérise par une légère minéralisation par rapport à bon nombre d’eaux minérales naturelles (148mg/L en résidu sec à 180°C). Elle convient dès lors à toute la famille, du nourrisson aux grands-parents.</p>
              </div>
            </div>
        </div>
    )
}

export default ProductInfo
