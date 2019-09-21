import React, { Component } from 'react'
import './SideNavigation.scss';
import logo from '../../assets/img/blueLogo.png';

export default class SideNavigation extends Component {
  render() {
    return (
      <div className='SideNavigation'>
            <img className='SideNavigation__logo' src={logo} alt='logo' />
        <div>div</div>
      </div>
    )
  }
}
