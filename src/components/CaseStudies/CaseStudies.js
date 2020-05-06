import React, {useState} from 'react'
import './CaseStudies.scss'
import CaseStudie from "./CaseStudie/CaseStudie"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleRight} from 'react-icons/fa'

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

    const [toggle, setToggle] = useState(false)
  return (
    <div className="caseStudies">
      <div className="caseStudies__content">
        <h3 className="caseStudies__title">Ils nous ont fait confiance</h3>
        <div className="caseStudies__list">
          {data.allContentfulStudyCase.edges.map((edge) => {
           
            return (
              <CaseStudie
                key={edge.node.index}
                index={edge.node.index}
                mainImage={edge.node.mainImage.file.url}
                logo={edge.node.logo.file.url}
                brandName={edge.node.brandName}
                toggle={toggle}
              />
            )
          })}
        </div>
        <div className="caseStudies__seeMore">
          <span onClick={() => setToggle(!toggle)}>{toggle ? 'VOIR MOINS' : 'VOIR PLUS'}</span> <FaAngleRight className="caseStudies__icon" />
        </div>
      </div>
     
    </div>
  )
}

