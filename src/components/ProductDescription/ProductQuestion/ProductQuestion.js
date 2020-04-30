import React from 'react'
import './ProductQuestion.scss';
import Collapsible from "react-collapsible"
import { IoIosArrowDown } from "react-icons/io"

class ProductQuestion extends React.Component {
 state = {
   activeIndex: 0
 }

  render() {
    
    return (
      <div className="ProductQuestion">
        <h3 className="ProductQuestion__title">
          {" "}
          <span>Questions / Réponses :</span> <hr></hr>
        </h3>
        <div>
          {this.props.questions ? this.props.questions.allQuestions.map(({answer, question}) => {
          return (
            <Collapsible
              transitionTime={200}
              trigger={
                <div className="ProductQuestion__trigger">
                  <p>{question}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
            >
              <div className="ProductQuestion__content">
                <p>
                  {answer.map((a, index) => {
                    return <p key={index} style={{marginBottom:'2px'}}>{a}</p>
                  })}
              </p>

              </div>

            </Collapsible>
          )
        }): ''}
        
        </div>
      </div>
    )
  }
}

export default ProductQuestion;
  

