import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <header>
          <nav>
            <text>Made Movement</text>
            <div className="header-right">
              <a href="#" target="_blank">Home</a>
              <a href="#" target="_blank">Log Out</a>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
