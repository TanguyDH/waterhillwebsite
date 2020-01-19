import React from 'react'
import './FaqQuestionList.scss';
import FaqQuestionItem from "./FaqQuestionItem/FaqQuestionItem"
import data from './data.js';
import { graphql, useStaticQuery } from "gatsby"




export default (props) => {
  const datas = useStaticQuery(graphql`
      query {
       allContentfulFaq {
       edges {
        node {
        faq {
          faq {
            question,
            response
          }
        }
      }
    }
  }
  }
  `)
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
              return <FaqQuestionItem question={question} response={response} />
      })}
    </div>
  
  )
}
