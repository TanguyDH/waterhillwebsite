import React from 'react'
import './ProductQuestion.scss';
import Collapsible from "react-collapsible"
import { IoIosArrowDown } from "react-icons/io"

class ProductQuestion extends React.Component {
 state = {
   activeIndex: 0
 }

  render() {
    const { activeIndex } = this.state
    return (
      <div className="ProductQuestion">
        <h3 className="ProductQuestion__title">
          {" "}
          <span>Questions / Réponses :</span> <hr></hr>
        </h3>
        <div>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="ProductQuestion__trigger">
                <p>Pouvons-nous produire plusieurs visuels pour la même commande?</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            }
          >
          <div className="ProductQuestion__content">
              <p>
                Moyennant un léger surcoût pour "changement d'étiquette", il est possible d'imprimer plusieurs visuels pour une même commande.
                Il vous suffit de nous envoyer les différents visuels que vous souhaitez imprimer ainsi que le nombre de bouteilles souhaitées par version. pour plus d'informations n'hésitez pas à nous contacter.
            </p>
          
          </div>
           
          </Collapsible>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="ProductQuestion__trigger">
                <p>Pouvons-nous être livrés à plusieurs endroits?</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            }
          >
             <div className="ProductQuestion__content">
              <p>
               Nous livrons partout en Europe dans un délai pouvant aller de 24h à 4 jours ouvrables maximum.
                Nous pouvons vous livrer à partir de 72 bouteilles
            </p>
          </div>
          </Collapsible>
        </div>
      </div>
    )
  }
}

export default ProductQuestion;
  

