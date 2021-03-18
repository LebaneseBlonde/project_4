import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserRegisterForm from './UserRegisterForm.js'

export default function UpdateUser({ history }) {

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const { data } = await axios.post('/api/users/register', formData,)

      history.push('/user/login')

    } catch (err) {
      console.log(err)
    }
  }

  return <div>
    <UserRegisterForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  </div>
}