import React, { Component } from 'react';
import '../App.css';
import profilePic from '../images/img-profile.png';

export default class Profile extends Component{
  render(){
    return(
      <div className="backsplash">
        <div className="profile-pic">
          <img className="picture" src={profilePic} alt="Profile Picture" />
        </div>
      </div>
    )
  }
}
