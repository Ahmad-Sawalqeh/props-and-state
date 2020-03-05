/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component{
  render(){
    return (
      <header>
        <h1>RESTy</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history" >History</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
