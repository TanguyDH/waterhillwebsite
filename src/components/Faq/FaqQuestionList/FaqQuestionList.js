import React from 'react'
import './FaqQuestionList.scss';
import FaqQuestionItem from "./FaqQuestionItem/FaqQuestionItem"
import data from './data.js';

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


export default (props) => {
  return (
    <div className="faqQuestionList">
          {selector(data , props.text).map(({question, response}) => {
              return <FaqQuestionItem question={question} response={response} />
      })}
    </div>
  )
}
