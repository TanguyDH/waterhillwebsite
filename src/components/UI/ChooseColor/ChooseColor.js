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
   
    const colors = [
      "d5d5d5",
      "#eee",
      "#e2b70d",
      "#d35400",
      "#EA2027",
      "#feabc9",
      "#66317c",
      "#99cbed",
      "#192a56",
      "#71db60",
      "#236818",
      "#a5a8b2",
      "#75665b",
      "#000"
    ]
      console.log(this.state.color);
      return (
        <div className="ChooseColor">
          {colors.map(color => {
            return (
              <div
                onClick={() => this.onChangeColor(color)}
                className="ChooseColor__item"
                style={{ backgroundColor: `${color}` }}
              >
                {this.state.color === color ? (
                  <span>
                    <IoMdCheckmark />
                  </span>
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      )
  }
}
