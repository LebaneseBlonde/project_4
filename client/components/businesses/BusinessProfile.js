import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BioSection from './BioSection'
import EndorsementsSection from './EndorsementsSection'
import HeroSection from './HeroSection'
import UpdatesSection from './UpdatesSection'
import TiersSection from './TiersSection'

export default function BusinessProfile({match}) {

  const businessId = match.params.businessId
  const [business, updateBusiness] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    async function getBusiness() {

      const {data} = await axios.get(`/api/businesses/${businessId}`)
      updateBusiness(data)
      updateLoading(false)
    }
    getBusiness()
  }, [])
    

  return <div>
    <HeroSection business={business} loading={loading}/>
    <TiersSection business={business} loading={loading}/>
    <BioSection business={business} loading={loading}/>
    <UpdatesSection business={business} loading={loading}/>
    <EndorsementsSection business={business} loading={loading}/>
  </div>
}