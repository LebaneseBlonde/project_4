import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

function Navbar(props) {

  const currentUser = props.currentUser
  setTimeout(()=> {
    getLoggedInUser(props.userChanged)
  }, 1000)

  return <div>
    <nav className="navbar is-light is-transparent" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'><div> Home </div></Link>
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

async function getLoggedInUser(userChanged) {
  if (!localStorage) return
  const token = localStorage.getItem('token')
  if (!token) return
  const payloadAsString = atob(token.split('.')[1])
  const payloadAsObject = JSON.parse(payloadAsString)
  const id = payloadAsObject.sub
  if (payloadAsObject.isBusiness != 'true') {
    const {data} = await axios.get(`/api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    userChanged(data)
  } else {
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