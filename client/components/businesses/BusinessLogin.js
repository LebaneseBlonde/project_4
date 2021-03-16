import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BusinessLogin({history}) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/businesses/login', formData)
      if(localStorage) localStorage.setItem('token', data.token)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return <div id='userLoginPage'>
    <section id='userLoginForm' className='section'>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <p>Don't have a business account? <span><a href='/business/register'>Register</a></span></p>
        <div className='field'>
          <div className='control'>
            <input
              className='input'
              type='text'
              value={formData['email']}
              onChange={handleChange}
              name='email'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <input
              className='input'
              type='password'
              value={formData['password']}
              onChange={handleChange}
              name='password'
              placeholder='Password'
            />
          </div>
        </div>
        <button className="button mt-5 is-warning">Login</button>
      </form>
    </section>
  </div>
}