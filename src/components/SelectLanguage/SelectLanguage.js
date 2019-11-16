import React, { Component } from "react"
import './SelectLanguage.scss';
// import ReactFlagsSelect from 'react-flags-select';
// import 'react-flags-select/css/react-flags-select.css';
import Modal from "react-modal"
import belgium from "../../assets/img/flags/belgium.png"
import france from "../../assets/img/flags/france.png"
import luxembourg from "../../assets/img/flags/luxembourg.png"
import netherlands from "../../assets/img/flags/netherlands.png"
import { IoMdClose } from "react-icons/io"


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
                             <li
                               onClick={() =>
                                 this.onChangeCountry("Belgique", belgium)
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
                                 this.onChangeCountry("France", france)
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
                                 this.onChangeCountry("Pays-Bas", netherlands)
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
                                 this.onChangeCountry("Luxembourg", luxembourg)
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





