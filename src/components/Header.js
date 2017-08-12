import React, { Component } from 'react';
import '../App.css';
import menu from '../images/icon-hamburger-nav.png'

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <header>
          <nav>
            <div className="mobile">
              <img src={menu} className="hamburger"  alt="Menu"/>
              <text>Profile</text>
            </div>
            <text>Made Movement</text>
            <div className="header-right">
              <a href="/">Home</a>
              <a href="/">Log Out</a>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
