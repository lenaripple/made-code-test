import React, { Component } from 'react';
import '../App.css';

export default class Form extends Component{
  render(){
    return(
      <div className="flex-form">
        <form>
          <label>
            First Name<br></br>
            <input type="text" name="firstName" value="" />
          </label>
          <label>
            Job Title<br></br>
            <input type="text" name="job" value="" />
          </label>
          <label>
            Birthday<br></br>
            <input type="date" name="birthday" value="" />
          </label>
          <label>
            Bio<br></br>
            <textarea name="bio" value="" rows="6" placeholder="A few words about yourself"></textarea>
          </label>
          <button type="submit" target="_blank" name="button">Save</button>
        </form>
      </div>
    )
  }
}
