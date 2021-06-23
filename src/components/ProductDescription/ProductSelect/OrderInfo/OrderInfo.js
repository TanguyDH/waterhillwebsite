

import React from 'react'
import './OrderInfo.scss';
import leaf from '../../../../assets/img/leaf.gif'

const OrderInfo = (props) => {
  

    return (
        <div className='OrderInfo'>
        
             <div className='OrderInfo__flex'>
               <div onClick={() => props.setPopupDevis(true)} className='OrderInfo__demi OrderInfo__devis'>Demande de devis sans engagement</div>
                <div onClick={() => props.setPopupSample(true)} className='OrderInfo__demi OrderInfo__sample'>Demandez un échantillion gratuit</div>
             </div>
                 <div className='OrderInfo__full'><img src={leaf} /> Grâce à cette commande, vous nous aidez à planter des arbres</div>
        </div>
    )
}

export default OrderInfo
