import React from 'react'
import './Box.scss';
import Text from './Text/Text';





class Box extends React.Component {
  state = { show: false };

handleClick() {
  this.setState({
    show: !this.state.show
  });
}
    render(){
    return (
      <div className="Box">
        <Text show={this.state.show} />
        <button onClick={() => this.handleClick()}>{this.state.show ? 'Read Less' : 'Read More'}</button>
      </div>
    )
  }
}
  


export default Box;