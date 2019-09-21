import React from 'react'
import './FaqQuestionItem.scss';
import Collapsible from "react-collapsible"
import { IoIosArrowDown } from "react-icons/io"


export default (props) => {
  return (
   <React.Fragment>
          <Collapsible
              transitionTime={200}
              className="faqQuestion"
              trigger={
                  <div className="faqQuestionItem__trigger">
                      <p>{props.question}</p>
                      <span>
                          <IoIosArrowDown />
                      </span>
                  </div>
              }
          >
             <div className='faqQuestionItem__content'>
                  {props.response}
             </div> 
          </Collapsible>

      </React.Fragment>
  )
}
