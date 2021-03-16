import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {

  return <div>
    <nav className="navbar is-light is-transparent" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item"> Home </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link fa fa-user"> More </a>
            <div className="navbar-dropdown">
              <a className="navbar-item"> About </a>
              <a className="navbar-item"> Jobs </a>
              <a className="navbar-item"> Contact </a>
              <hr className="navbar-divider"/>
              <a className="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a href="#" className="navbar-item"><i className="fa fa-search"></i></a>
          <a href="#" className="navbar-item"><i className="fa fa-shopping-bag"></i></a>
        </div>
      </div>
    </nav>
  </div>
}