import React from 'react'
import './Commitment.scss';
import ReactFullpage from "@fullpage/react-fullpage"
import Fade from "react-reveal/Fade";
import FIEBVIWF from "../../assets/img/logo/FIEBVIWF.png"
import GraindeDeVie from "../../assets/img/transparent-GDV.png"
import Fost from "../../assets/img/logo/logo_fost.png"
import Cpf from "../../assets/img/logo/cfp-2014.png"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import anime from '../../assets/img/OK_animate[1].gif';

// const pluginWrapper = () => {
//   require("./static/fullpage.scrollHorizontally.min.js")
// }
// pluginWrapper = { pluginWrapper }

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "assets/img/commitment/commitment1.jpeg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(
        relativePath: { eq: "assets/img/commitment/commitment2.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "assets/img/commitment/hands.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(
        relativePath: { eq: "assets/img/commitment/commitment4.jpeg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
                <BackgroundImage
                  fluid={data.image1.childImageSharp.fluid}
                  className="Commitment__section1"
                >
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Waterhill, notre vision du futur</h3>
                      <p>
                        Une vision ambitieuse du développement durable autour de
                        3 piliers : La ressource en eau, l’empreinte carbone et
                        l’économie circulaire de nos matériaux.
                      </p>
                    </Fade>
                  </div>
                </BackgroundImage>
              </div>
              <div className="section">
                <BackgroundImage
                  fluid={data.image2.childImageSharp.fluid}
                  className="Commitment__section2"
                >
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Nous compensons 100% de notre empreinte carbone</h3>
                      <p>
                        Nous nous engageons à neutraliser notre empreinte
                        carbone grâce à nos actions de reforestation.
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://grainedevie.org/en/index.php"
                      >
                        <img src={GraindeDeVie} alt="GraindeDeVie" />
                      </a>
                    </Fade>
                  </div>
                </BackgroundImage>
              </div>

              <div className="section">
                <BackgroundImage
                  fluid={data.image4.childImageSharp.fluid}
                  className="Commitment__section4"
                >
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>L'économie circulaire, le présent et l'avenir de Waterhill</h3>
                      <p>
                        Prendre soin de l'environnement est une réalité quotidienne chez Waterhill. C'est pourquoi nos premières bouteilles 100% végétales à base de bagasse de canne à sucre sont désormais disponibles. De cette manière, aucun nouveau plastique n'est utilisé et aucun nouveau déchet n'est généré. L'économie circulaire est dans l'ADN de Waterhill.
                      </p>

                      <img src={anime} alt='' />
                      
                    </Fade>
                  </div>
                </BackgroundImage>
              </div>

              <div className="section">
                <BackgroundImage
                  fluid={data.image3.childImageSharp.fluid}
                  className="Commitment__section3"
                >
                  <div className="Commitment__content">
                    <Fade bottom>
                      <h3>Waterhill, collabore avec...</h3>
                      <div className="Commitment__logos">
                        <div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://cfpnet.be/"
                          >
                            <img src={Cpf} alt="Cpf" />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.fieb-viwf.be/"
                          >
                            <img src={FIEBVIWF} alt="FIEBVIWF" />
                          </a>
                        </div>

                        <div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://grainedevie.org/en/index.php"
                          >
                            <img src={GraindeDeVie} alt="GraindeDeVie" />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.fostplus.be/"
                          >
                            <img src={Fost} alt="fost" />
                          </a>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </BackgroundImage>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
