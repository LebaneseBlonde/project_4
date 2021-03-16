import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {

  return <div>
    <nav className="navbar is-light is-transparent" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'><a> Home </a></Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Your account </a>
            <div className="navbar-dropdown">
              <a className="navbar-item"> Profile </a>
              <a className="navbar-item"> Settings </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
}