import React, { Component } from 'react';
import '../App.css';
import buttonImg from "../images/img-save.png";

export default class Form extends Component{
  render(){
    return(
      <div className="flex-form">
        <form className="" action="index.html" method="post">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" value="" />
          <label for="job">Job Title</label>
          <input type="text" name="job" value="" />
          <label for="birthday">Birthday</label>
          <input type="date" name="birthday" value="" />
          <label for="bio">Bio</label>
          <textarea name="bio" value="" rows="10" placeholder="A few words about yourself"></textarea>
          <img src={buttonImg} className="button-pic" alt="Save"/>
        </form>
      </div>
    )
  }
}
