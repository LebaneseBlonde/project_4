import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BioSection from './BioSection'
import EndorsementsSection from './EndorsementsSection'
import HeroSection from './HeroSection'
import UpdatesSection from './UpdatesSection'
import TiersSection from './TiersSection'

export default function BusinessProfile({match}) {
  const isBusiness = localStorage.getItem('isBusiness')
  const businessId = match.params.businessId
  const [business, updateBusiness] = useState([])
  const [loading, updateLoading] = useState(true)
  
  useEffect(() => {
    async function getBusiness() {

      const {data} = await axios.get(`/api/businesses/${businessId}`)
      updateBusiness(data)
      console.log(data)
      updateLoading(false)
    }
    getBusiness()
  }, [])
    

  return <div id='businessProfilePage'>
    <HeroSection business={business} loading={loading} isBusiness={isBusiness} />
    <TiersSection business={business} loading={loading} isBusiness={isBusiness} />
    <BioSection business={business} loading={loading} isBusiness={isBusiness} />
    <UpdatesSection business={business} loading={loading} isBusiness={isBusiness} />
    <EndorsementsSection business={business} loading={loading} isBusiness={isBusiness} />
  </div>
}