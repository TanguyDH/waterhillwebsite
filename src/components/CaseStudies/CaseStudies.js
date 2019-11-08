import React from 'react'
import './CaseStudies.scss'
import CaseStudie from "./CaseStudie/CaseStudie"

const caseStudies = [1,2,3,4,5,6];

 class CaseStudies extends React.Component {

 
   render(){
     return (
       <div className="caseStudies">
         <div className="caseStudies__content">
           <h3 className="caseStudies__title">Ils nous ont fait confiance</h3>
           <div className="caseStudies__list">
             {caseStudies.map((index) => {
               return (
                 <CaseStudie
                   index={index}
                 />
               )
             })}
           </div>
         </div>
       </div>
     )
   }
}


export default CaseStudies;