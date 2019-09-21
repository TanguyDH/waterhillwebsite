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
                <p>Donec congue placerat accumsan ?</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            }
          >
          <div className="ProductQuestion__content">
           <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </div>
           
          </Collapsible>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="ProductQuestion__trigger">
                <p>accumsan Donec congue placerat ?</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            }
          >
             <div className="ProductQuestion__content">
           <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </div>
          </Collapsible>
        </div>
      </div>
    )
  }
}

export default ProductQuestion;
  

