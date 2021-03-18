import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BusinessTierForm from './forms/BusinessTierForm'

export default function TPManager(){

  const [business, updateBusiness] = useState([])
  const [loading, updateLoading] = useState(true)
  
  useEffect(() => {
    async function getBusiness() {
      const businessId = getBusinessId()
      console.log(businessId);
      console.log('hi')
      const { data } = await axios.get(`/api/businesses/${businessId}`)
      console.log(data);
      updateBusiness(data)
      updateLoading(false)
      console.log('hi2')
    }
    getBusiness()
  }, [])

  function getBusinessId() {
    if (!localStorage) return
    const token = localStorage.getItem('token')
    if (!token) return
    const payloadAsString = atob(token.split('.')[1])
    const payloadAsObject = JSON.parse(payloadAsString)
    return payloadAsObject.sub
  }

  function handleTierChange(event, index) {
    const newTierFormData = [...tierFormData]
    newTierFormData[index] = {
      ...newTierFormData[index],
      [event.target.name]: event.target.value
    }
    setTierFormData(newTierFormData)
  }

  function handlePerkChange(event, index, index2) {
    const newPerkFormData = [...perkFormData]
    newPerkFormData[index] = [
      ...newPerkFormData[index],
    ]
    newPerkFormData[index][index2] = { perk: event.target.value }
    setPerkFormData(newPerkFormData)
  }

  const [tierFormData, setTierFormData] = useState([{
    price: 0,
    name: '',

  }])

  const [perkFormData, setPerkFormData] = useState([[{
    perk: ''
  }]])

  async function handleTierPerkSubmit(event) {
    event.preventDefault()
    const fundId = localStorage.getItem('fundId')
    const token = localStorage.getItem('token')
    try {
      tierFormData.map(async (tier, tierIndex) => {
        const { data } = await axios.post(`/api/funds/${fundId}/tiers`, tier, {
          headers: { Authorization: `Bearer ${token}` }
        })
        const tierId = data.id
        perkFormData[tierIndex].map(async (perk) => {
          const { data } = await axios.post(`/api/funds/${fundId}/tiers/${tierId}/perks`, perk, {
            headers: { Authorization: `Bearer ${token}` }
          })
        })
      })
      history.push('/')
    } catch (err) {
      console.log(err);
    }
  }


  return <div>
    {/* <div>
      {business.fund[0].tiers.map(tier => {
        return <div className="card tier-cards tier-cards" key={tier.name}>
          <div className="card-content">
            <p className="subtitle is-5">{tier.name}</p>
            <p className="subtitle is-4">£{tier.price}</p>
            <button className='button is-danger'>Join</button>
            <ul className="content perk-list">
              {tier.perks.map((perk, index) => {
                return <li className='perk-list' key={index}>{perk.perk}</li>
              })}
            </ul>
          </div>
        </div>
      })}
    </div> */}

    <BusinessTierForm 
      handleTierChange={handleTierChange}
      handlePerkChange={handlePerkChange}
      tierFormData={tierFormData}
      setTierFormData={setTierFormData}
      setPerkFormData={setPerkFormData}
      perkFormData={perkFormData}
      handleTierPerkSubmit={handleTierPerkSubmit} />
  </div>
}