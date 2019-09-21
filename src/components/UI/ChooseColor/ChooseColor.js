import React, { Component } from 'react'
import './ChooseColor.scss';
import { IoMdCheckmark} from 'react-icons/io';
export default class ChooseColor extends Component {
    state = {
        color: ''
    }

    onChangeColor = (color) => {
        this.setState({color});
    
    }
  render() {
   
    const colors = ["yellow", "white", "red", "#e67e22", '#2ecc71', '#1b7741', '#3498db','#3a5169'];
      console.log(this.state.color);
      return (
        <div className="ChooseColor">
          {colors.map(color => {
            return <div onClick={() => this.onChangeColor(color)} className="ChooseColor__item" style={{backgroundColor:`${color}`}}>
         { this.state.color === color ? <span><IoMdCheckmark /></span>: ""}
            </div>
          })}
        </div>
      )
  }
}
