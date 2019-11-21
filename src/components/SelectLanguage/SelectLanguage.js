import React, { Component } from "react"
import './SelectLanguage.scss';
import Modal from "react-modal"
import belgium from "../../assets/img/flags/belgium.png"
import france from "../../assets/img/flags/france.png"
import europe from '../../assets/img/flags/europe.png';
import luxembourg from "../../assets/img/flags/luxembourg.png"
import netherlands from "../../assets/img/flags/netherlands.png"
import { IoMdClose } from "react-icons/io"
import Collapsible from "react-collapsible"

//  <Collapsible
//    transitionTime={200}
 
//    trigger={
//      <div className="faqQuestionItem__trigger">
//        <p>{props.question}</p>
//        <span>
//          <IoIosArrowDown />
//        </span>
//      </div>
//    }
//  >
//    <div className="faqQuestionItem__content">
//      <p> {props.response}</p>
//    </div>
//  </Collapsible>


export default class SelectLanguage extends Component {
                 state = {
                   modalIsOpen: false,
                   region: "Belgique",
                   imgFlag: belgium,
                 }

                 closeModal = () => {
                   this.setState({ modalIsOpen: false })
                 }

                 openModal = () => {
                   this.setState({ modalIsOpen: true })
                 }
                 onChangeCountry = (flagText, imgFlag) => {
                   this.setState({
                     region: flagText,
                     imgFlag: imgFlag,
                     modalIsOpen: false,
                   })
                 }

                 render() {
                   return (
                     <div className="ChooseCountry">
                       <p
                         className="ChooseCountry__choose"
                         onClick={this.openModal}
                       >
                         <img
                           className="ChooseCountry__flag"
                           src={this.state.imgFlag}
                           alt={this.state.region}
                         />
                         {this.state.region}{" "}
                       </p>
                       <Modal
                         isOpen={this.state.modalIsOpen}
                         onRequestClose={this.closeModal}
                         className="ChooseCountry__modal"
                         overlayClassName="Overlay"
                       >
                         <span
                           onClick={this.closeModal}
                           className="ChooseCountry__close"
                         >
                           <IoMdClose />
                         </span>
                         <h3>Sélectionnez votre pays</h3>
                         <div className="ChooseCountry__content">
                           <h5>Europe</h5>
                           <ul>
                             <Collapsible
                               transitionTime={200}
                               trigger={
                                 <li>
                                   <img
                                     className="ChooseCountry__flag"
                                     src={belgium}
                                     alt="belgium"
                                   />
                                   Belgique
                                 </li>
                               }
                             >
                               <ul>
                                 <li
                                   className="ChooseCountry__language"
                                   onClick={() =>
                                     this.onChangeCountry("Francais", belgium)
                                   }
                                 >
                                   Francais
                                 </li>
                                 <li
                                   className="ChooseCountry__language"
                                   onClick={() =>
                                     this.onChangeCountry("Nederlands", belgium)
                                   }
                                 >
                                   Nederlands
                                 </li>
                               </ul>
                             </Collapsible>

                             <Collapsible
                               transitionTime={200}
                               trigger={
                                 <li>
                                   <img
                                     className="ChooseCountry__flag"
                                     src={france}
                                     alt="france"
                                   />
                                   France
                                 </li>
                               }
                             >
                               <ul>
                                 <li
                                   className="ChooseCountry__language"
                                   onClick={() =>
                                     this.onChangeCountry("Francais", france)
                                   }
                                 >
                                   Francais
                                 </li>
                               </ul>
                             </Collapsible>


                             <Collapsible
                               transitionTime={200}
                               trigger={
                                 <li>
                                   <img
                                     className="ChooseCountry__flag"
                                     src={europe}
                                     alt="france"
                                   />
                                   English
                                 </li>
                               }
                             >
                               <ul>
                                 <li
                                   className="ChooseCountry__language"
                                   onClick={() =>
                                     this.onChangeCountry("English", europe)
                                   }
                                 >
                                   English
                                 </li>
                               </ul>
                             </Collapsible>

                           
                           </ul>
                         </div>
                       </Modal>
                     </div>
                   )
                 }
               }


// export default () => {
//   return (
//       <div className="SelectLanguage">
//       <ReactFlagsSelect
//           defaultCountry="FR"
//         countries={["GB", "BE", "FR","BE"]}
//         customLabels={{ "GB": "Anglais", "BE": "Français", "FR": "Français", "BE": "Nederlands" }}
//           showSelectedLabel={false} />
//       </div>
//   )
// }




  // <Collapsible
  //                              transitionTime={200}
  //                              trigger={
  //                                <li>
  //                                  <img
  //                                    className="ChooseCountry__flag"
  //                                    src={netherlands}
  //                                    alt="netherlands"
  //                                  />
  //                                  Pays-Bas
  //                                </li>
  //                              }
  //                            >
  //                              <ul>
  //                                <li
  //                                  className="ChooseCountry__language"
  //                                  onClick={() =>
  //                                    this.onChangeCountry(
  //                                      "Pays-Bas",
  //                                      netherlands
  //                                    )
  //                                  }
  //                                >
  //                                  Francais
  //                                </li>
  //                              </ul>
  //                            </Collapsible>

  //                            <Collapsible
  //                              transitionTime={200}
  //                              trigger={
  //                                <li>
  //                                  <img
  //                                    className="ChooseCountry__flag"
  //                                    src={luxembourg}
  //                                    alt="luxembourg"
  //                                  />
  //                                  Luxembourg
  //                                </li>
  //                              }
  //                            >
  //                              <ul>
  //                                <li
  //                                  className="ChooseCountry__language"
  //                                  onClick={() =>
  //                                    this.onChangeCountry(
  //                                      "Luxembourg",
  //                                      luxembourg
  //                                    )
  //                                  }
  //                                >
  //                                  Francais
  //                                </li>
  //                              </ul>
  //                            </Collapsible>



