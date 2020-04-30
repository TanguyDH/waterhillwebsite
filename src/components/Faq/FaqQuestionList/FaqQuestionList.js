import React from 'react'
import './FaqQuestionList.scss';
import FaqQuestionItem from "./FaqQuestionItem/FaqQuestionItem"
import data from './data.js';




export default (props) => {

  const selector = (data, text) => {
  
   
    return data.filter(data => {
      const textMatch = data.question
        .toLowerCase()
        .includes(text.toLowerCase())
        || JSON.stringify(data.response)
          .toLowerCase()
          .includes(text.toLowerCase())

      return textMatch

    })
  }


  return (
    <div className="faqQuestionList">
      {selector(data, props.text).map(({question, response}) => {
        return <FaqQuestionItem key={question} question={question} response={response} />
      })}
    </div>
  
  )
}
