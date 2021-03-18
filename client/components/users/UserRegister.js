import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserRegisterForm from './UserRegisterForm.js'

export default function UserRegister({history}) {

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: ''
    // image: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
  })

  function handleChange(event) {
    updateFormData({...formData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const {data} = await axios.post('/api/users/register', formData,)

      history.push('/user/login')

    } catch (err) {
      console.log(err)
    }
  }

  return <div class='page'>
    <div class="container">
      <UserRegisterForm
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        formData = {formData}
      />
    </div>
  </div>
}