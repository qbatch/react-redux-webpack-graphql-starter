import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class HomeLayout extends Component {
  render() {
    return (
      <div>
         <NavLink to="/">About</NavLink>&nbsp;
        <NavLink to="/Signup">Singup</NavLink>&nbsp;
        <NavLink to="/signin">Singinin</NavLink>&nbsp;
        <NavLink to="/">Home</NavLink>&nbsp;
        {this.props.children}
      </div>
    );
  }
}


export default HomeLayout;