import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BusinessBioForm from './forms/BusinessBioForm'
import BusinessFundForm from './forms/BusinessFundForm'
import BusinessTierForm from './forms/BusinessTierForm'

export default function BusinessRegister(history) {

  const [formNum, setFormNum] = useState(2)

  const [bioFormData, setBioFormData] = useState({
    name : '',
    address_1 : '',
    address_2 : '',
    address_city : '',
    address_postcode : '',
    category : '',
    bio : '',
    image : '',
    established : '',
    email: '',
    password: ''
  })
  
  const [fundFormData, setFundFormData] = useState({
    subscription : true,
    fund_goal : 0,
    funds_raised : 0,
    description : ''
  })

  const [tierFormData, setTierFormData] = useState([{
    price : 0,
    name : '',

  }])

  const [perkFormData, setPerkFormData] = useState({
    perk : ''
  })

  function getBusinessId () {
    if (!localStorage) return
    const token = localStorage.getItem('token')
    if (!token) return
    const payloadAsString = atob(token.split('.')[1])
    const payloadAsObject = JSON.parse(payloadAsString)
    return payloadAsObject.sub
  }

  function handleBioChange(event) {
    setBioFormData({...bioFormData, [event.target.name]: event.target.value})
  }

  function handleFundChange(event) {
    setFundFormData({...fundFormData, [event.target.name]: event.target.value})
  }
  
  function handleTierChange(event, number) {
    console.log(number)
    setTierFormData({...tierFormData, [tierFormData[number].name]: event.target.value})
  }
  
  function handlePerkChange(event) {
    setPerkFormData({...PerkFormData, [event.target.name]: event.target.value})
  }

  async function handleBioSubmit(event) {
    event.preventDefault()
    try {
      await axios.post('/api/businesses/register', bioFormData)
      const business = {
        email: bioFormData.email,
        password: bioFormData.password
      }

      const { data } = await axios.post('/api/businesses/login', business)
      if (localStorage) localStorage.setItem('token', data.token)

      setFormNum(1)
    } catch (err) {
      console.log(err)
    }
  }

  async function handleFundSubmit(event) {
    event.preventDefault()
    const businessId = getBusinessId()
    const token = localStorage.getItem('token')

    try {
      await axios.post(`/api/businesses/${businessId}/funds`, fundFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setFormNum(2)
    } catch (err) {
      console.log(err)
    }
  }

  return <div>
    {formNum === 0 && <BusinessBioForm 
      handleBioChange={handleBioChange}
      handleBioSubmit={handleBioSubmit}
      bioFormData={bioFormData}
    />}
    {formNum === 1 && <BusinessFundForm 
      handleFundChange={handleFundChange}
      handleFundSubmit={handleFundSubmit}
      fundFormData={fundFormData}
    />}
    {formNum === 2 && <BusinessTierForm 
      handleTierChange={handleTierChange}
      handlePerkChange={handlePerkChange}
      tierFormData={tierFormData}
      perkFormData={perkFormData}
    />}
  </div>
}