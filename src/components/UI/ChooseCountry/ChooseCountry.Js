import React, { Component } from 'react'
import "./ChooseCountry.scss";
import Modal from "react-modal"
import belgium from  '../../../assets/img/flags/belgium.png';
import france from "../../../assets/img/flags/france.png"
import luxembourg from "../../../assets/img/flags/luxembourg.png"
import netherlands from "../../../assets/img/flags/netherlands.png"
import { IoMdClose} from 'react-icons/io';

// Modal.setAppElement("#___gatsby")

export default class ChooseCountry extends Component {
                 state = {
                   modalIsOpen: false,
                     region: "Belgique",
                     imgFlag: belgium
                 }

                 closeModal = () => {
                   this.setState({ modalIsOpen: false })
                 }

                 openModal = () => {
                   this.setState({ modalIsOpen: true })
                 }
      onChangeCountry = (imgFlag, flagText) => {
        this.setState({ region: flagText, imgFlag, modalIsOpen:false })
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
                             <li
                               onClick={() =>
                                 this.onChangeCountry(belgium, "Belgique")
                               }
                             >
                               <img
                                 className="ChooseCountry__flag"
                                 src={belgium}
                                 alt="belgium"
                               />
                               Belgique
                             </li>

                             <li
                               onClick={() =>
                                 this.onChangeCountry(france, "France")
                               }
                             >
                               <img
                                 className="ChooseCountry__flag"
                                 src={france}
                                 alt="france"
                               />
                               France
                             </li>
                             <li
                               onClick={() =>
                                 this.onChangeCountry(netherlands, "Pays-Bas")
                               }
                             >
                               <img
                                 className="ChooseCountry__flag"
                                 src={netherlands}
                                 alt="netherlands"
                               />
                               Pays-Bas
                             </li>
                             <li
                               onClick={() =>
                                 this.onChangeCountry(luxembourg, "Luxembourg")
                               }
                             >
                               <img
                                 className="ChooseCountry__flag"
                                 src={luxembourg}
                                 alt="luxembourg"
                               />
                               Luxembourg
                             </li>
                           </ul>
                         </div>
                       </Modal>
                     </div>
                   )
                 }
               }






// <Collapsible
//   trigger={
//     <li
//       onClick={() =>
//         this.onChangeCountry(belgium, "Belgique")
//       }
//     >
//       <img
//         className="ChooseCountry__flag"
//         src={belgium}
//         alt="belgium"
//       />
//       Belgique
//                                  </li>
//   }
// >
//   <div className="ChooseCountry__collapsible">
//     sisis
//                                </div>
// </Collapsible>



//   <Collapsible
//     trigger={
//       <li
//         onClick={() =>
//           this.onChangeCountry(france, "France")
//         }
//       >
//         <img
//           className="ChooseCountry__flag"
//           src={france}
//           alt="france"
//         />
//         France
//                              </li>
//     }
//   >
//     <div className="ChooseCountry__collapsible">
//       sisis
//                                </div>
//   </Collapsible>


//   <Collapsible
//     trigger={
//       <li
//         onClick={() =>
//           this.onChangeCountry(netherlands, "Pays-Bas")
//         }
//       >
//         <img
//           className="ChooseCountry__flag"
//           src={netherlands}
//           alt="netherlands"
//         />
//         Pays-Bas
//                              </li>
//     }
//   >
//     <div className="ChooseCountry__collapsible">
//       sisis
//                                </div>
//   </Collapsible>


//   <Collapsible
//     trigger={
//       <li
//         onClick={() =>
//           this.onChangeCountry(luxembourg, "Luxembourg")
//         }
//       >
//         <img
//           className="ChooseCountry__flag"
//           src={luxembourg}
//           alt="luxembourg"
//         />
//         Luxembourg
//                              </li>
//     }
//   >
//     <div className="ChooseCountry__collapsible">
//       sisis
//                                </div>
//   </Collapsible>
