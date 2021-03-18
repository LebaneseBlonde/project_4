import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import axios from 'axios'

function Navbar({history}) {

  const [currentUser, setCurrentUser] = useState({})

  setTimeout(() => {
    getLoggedInUser()
  }, 250)

  async function getLoggedInUser() {
    if (!localStorage) return
    const token = localStorage.getItem('token')
    if (!token) return
    const payloadAsString = atob(token.split('.')[1])
    const payloadAsObject = JSON.parse(payloadAsString)
    const id = payloadAsObject.sub

    if (payloadAsObject.isBusiness !== 'true') {
      let isBusiness = false
      localStorage.setItem('isBusiness', isBusiness)
      const {data} = await axios.get(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setCurrentUser(data)

    } else {
      let isBusiness = true
      localStorage.setItem('isBusiness', isBusiness)
      const {data} = await axios.get(`/api/businesses/${id}`)
      setCurrentUser(data)
    }
  }

  function logOut() {
    localStorage.clear()
    setCurrentUser({})
    history.push('/')
  }

  const isBusiness = localStorage.getItem('isBusiness')

  return <div>
    <nav className="navbar navbar-fixed background-primary" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'><h1>f&uuml;nd</h1></Link>
        </div>
        <div className="navbar-end">
          {currentUser.id && isBusiness === 'false' && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless"> Your account </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to={{pathname: '/user/dashboard', state: currentUser}}><div> Your Pledges </div></Link>
              <Link className="navbar-item" to='/user/update_profile'><div> Account Settings </div></Link>
            </div>
          </div>}
          {currentUser.id && isBusiness === 'true' && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless"> Your account </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/business/profile'><div> Profile </div></Link>
              <Link className="navbar-item" to='/business/:businessId/tiers'><div className="navbar-item"> Update Business </div></Link>
              <Link className="navbar-item" to='/'><div className="navbar-item"> Update Fund </div></Link>
              <Link className="navbar-item" to={`/business/${currentUser.id}/tiers`}><div className="navbar-item"> Add/Remove Tiers </div></Link>
              <Link className="navbar-item" to='/business/update_profile'><div> Account Settings </div></Link>
            </div>
          </div>}
          {currentUser.id && <div className='navbar-item' onClick={logOut}> Logout </div>}

          {!currentUser.id && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless"> Login/Register </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/user/login'><div> User Login </div></Link>
              <Link className="navbar-item" to='/business/login'><div> Business Login </div></Link>
              <Link className="navbar-item" to='/user/register'><div> Register User </div></Link>
              <Link className="navbar-item" to='/business/register'><div> Register Business </div></Link>
            </div>
          </div>}
        </div>
      </div>
    </nav>
  </div>
}

export default withRouter(Navbar)