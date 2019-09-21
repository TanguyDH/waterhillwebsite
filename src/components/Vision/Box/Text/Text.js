import React from 'react'
import './Text.scss';
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ToggleDisplay from "react-toggle-display"

export default (props) => {
    const data = useStaticQuery(graphql`
    query {
      contentfulConcept {
        visible {
          json
        }
        hidden {
          json
        }
      }
    }
  `)

    return (
      <div className='Text'>
        {documentToReactComponents(data.contentfulConcept.visible.json)}
        <ToggleDisplay show={props.show}>
          {documentToReactComponents(data.contentfulConcept.hidden.json)}
        </ToggleDisplay>
      </div>
    )
}
