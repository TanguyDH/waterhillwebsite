import React, {useState} from 'react'
import './CaseStudies.scss'
import CaseStudie from "./CaseStudie/CaseStudie"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleRight} from 'react-icons/fa'
import TextLoop from "react-text-loop"
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
        <h3 className="products__title">Ils nous
        {" "}
        <TextLoop>
          <span>ont fait</span>
          <span>font</span>
        </TextLoop>
        {" "}
          confiance
        </h3>
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

