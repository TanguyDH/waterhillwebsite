import React from 'react'
import one from '../../assets/img/ProductInfo/1.jpg';
import two from '../../assets/img/ProductInfo/2.jpg';
import three from '../../assets/img/ProductInfo/3.jpg';
import './ProductInfo.scss';

const ProductInfo = () => {
    return (
        <div className='ProductInfo' >
            <div className='ProductInfo__item'>
                <img className='ProductInfo__img ProductInfo__img--1' src={one}  />
                <div className='ProductInfo__text ProductInfo__text--1'>
                    <h3>WATERHILL, une eau légèrement minéralisée</h3>
                    <p>L’eau de Waterhill se caractérise par une légère minéralisation par rapport à bon nombre d’eaux minérales naturelles (148mg/L en résidu sec à 180°C). Elle convient dès lors à toute la famille, du nourrisson aux grands-parents.</p>
              </div>
            </div>
            <div className='ProductInfo__item'>
              
                <div className='ProductInfo__text ProductInfo__text--2'>
                    <h3>Une eau au goût unique</h3>
                    <p>Légèrement minéralisée, l’eau de Waterhill se caractérise avant tout par une teneur optimale en calcium (22 mg/l). Cette eau contribue à la solidité des os et des dents à la contraction musculaire et à la coagulation sanguine. Son goût neutre (ni trop salée, ni trop ferreuse, …) plaît à un très large public. </p>
              </div>
                <img className='ProductInfo__img ProductInfo__img--2' src={two} />
            </div>
            <div className='ProductInfo__item'>
                <img className=' ProductInfo__img ProductInfo__img--1' src={three} />
                <div className='ProductInfo__text ProductInfo__text--1'>
                    <h3>Un long voyage sous terre avant d’être embouteillée</h3>
                    <p>L’environnement géologique filtre de manière continue et naturelle notre eau. L’eau de Waterhill est ainsi naturellement filtrée à travers des couches poreuses de grès et de sable, puis rejaillit, sans additifs, sans transformation à la sortie de la source pour être ensuite directement embouteillée et prête à la consommation.</p>
              </div>
            </div>
        </div>
    )
}

export default ProductInfo
