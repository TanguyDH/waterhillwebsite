import React from 'react'
import './Commitment.scss';
import ReactFullpage from "@fullpage/react-fullpage"
import Fade from "react-reveal/Fade"

// const pluginWrapper = () => {
//   require("./statics/fullpage.scrollHorizontally.min")
// }
// pluginWrapper = { pluginWrapper }

export default () => {
  return (
    <div className="Commitment">
      <ReactFullpage
        licenseKey={"73116383-462D4B44-8E8DDDB6-215B0"}
        scrollHorizontallyKey={"50BE9B20-5C234067-8AC26878-0060"}
        scrollHorizontally={true} 
        scrollingSpeed={900}
        navigation={true}
        continuousHorizontal={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="Commitment__section1">
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Forests for everybody, forever</h3>
                      <p>
                        We are demanding from the beginning until the end of the
                        chain of production. The suppliers of Sant Aniol supply
                        certified materials that comply with the international
                        standards FSC and PEFC, which guarantee that both the
                        paper used for the labels and the cardboard used for the
                        boxes come from sustainably managed forests.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="Commitment__section2">
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Perimeter of security, guarantee of purity</h3>
                      <p>
                        The spring of Sant Aniol is protected by a perimeter of
                        security of 275 hectares. Environmental management,
                        biodiversity and an exhaustive quality control, along
                        with the perimeter of security, guarantee that Sant
                        Aniol, the natural mineral water with volcanic origin,
                        is completely pure and free of external agents.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="Commitment__section3">
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Forests for everybody, forever</h3>
                      <p>
                        We are demanding from the beginning until the end of the
                        chain of production. The suppliers of Sant Aniol supply
                        certified materials that comply with the international
                        standards FSC and PEFC, which guarantee that both the
                        paper used for the labels and the cardboard used for the
                        boxes come from sustainably managed forests.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
