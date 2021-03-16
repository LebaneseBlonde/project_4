import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

function Navbar(props) {

  const currentUser = props.currentUser
  setTimeout(()=> {
    getLoggedInUser(props.userChanged)
  }, 1000)

  const isBusiness = localStorage.getItem('isBusiness')
  console.log(isBusiness)

  return <div>
    <nav className="navbar is-light is-transparent" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'><div> Home </div></Link>
          {currentUser && isBusiness === 'false' && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Your account </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/user/profile'><div className="navbar-item"> Profile </div></Link>
              <Link className="navbar-item" to='/user/update_profile'><div className="navbar-item"> Account Settings </div></Link>
            </div>
          </div>}
          {currentUser && isBusiness === 'true' && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Your account </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/business/profile'><div className="navbar-item"> Profile </div></Link>
              <Link className="navbar-item" to='/business/update_profile'><div className="navbar-item"> Account Settings </div></Link>
            </div>
          </div>}
          {!currentUser && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Login/Register </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/user/login'><div className="navbar-item"> User Login </div></Link>
              <Link className="navbar-item" to='/business/login'><div className="navbar-item"> Business Login </div></Link>
              <Link className="navbar-item" to='/user/register'><div className="navbar-item"> Register User </div></Link>
              <Link className="navbar-item" to='/business/register'><div className="navbar-item"> Register Business </div></Link>
            </div>
          </div>}
        </div>
      </div>
    </nav>
  </div>
}

async function getLoggedInUser(userChanged) {
  if (!localStorage) return
  const token = localStorage.getItem('token')
  if (!token) return
  const payloadAsString = atob(token.split('.')[1])
  const payloadAsObject = JSON.parse(payloadAsString)
  const id = payloadAsObject.sub
  if (payloadAsObject.isBusiness != 'true') {
    let isBusiness = false
    localStorage.setItem('isBusiness', isBusiness)
    const {data} = await axios.get(`/api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    userChanged(data)
  } else {
    let isBusiness = true
    localStorage.setItem('isBusiness', isBusiness)
    const {data} = await axios.get(`/api/businesses/${id}`)
    userChanged(data)
  }

}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    userChanged: (account) => {
      const action = {type: 'USER_CHANGE', user: account}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)