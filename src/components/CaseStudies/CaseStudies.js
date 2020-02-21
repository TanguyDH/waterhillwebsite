import React from 'react'
import './CaseStudies.scss'
import CaseStudie from "./CaseStudie/CaseStudie"
import { graphql, useStaticQuery } from "gatsby"

const caseStudies = [1,2,3,4,5,6];
// (sort: { fields: order, order: ASC }) 
export default () => {
  const data = useStaticQuery(graphql`
    query {
  allContentfulStudyCase (sort: { fields: index, order: ASC })  {
    edges {
      node {
        index
        brandName
        mainImage {
                file {
                  url
                }
              }
        logo {
               file {
                  url
                }
              }
        galleryImages {
               file {
                 url
               }
             }
        
        }
      }
    }
    
  }

    `)
  return (
    <div className="caseStudies">
      <div className="caseStudies__content">
        <h3 className="caseStudies__title">Ils nous ont fait confiance</h3>
        <div className="caseStudies__list">
          {data.allContentfulStudyCase.edges.map((edge) => {
           
            return (
              <CaseStudie
                index={edge.node.index}
                mainImage={edge.node.mainImage.file.url}
                logo={edge.node.logo.file.url}
                brandName={edge.node.brandName}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

