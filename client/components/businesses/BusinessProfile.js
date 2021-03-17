import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BioSection from './BioSection'
import EndorsementsSection from './EndorsementsSection'
import FundSection from './FundSection'
import UpdatesSection from './UpdatesSection'

export default function BusinessProfile() {

  return <div>
    <BioSection business={business} loading={loading}/>
    <FundSection />
    <UpdatesSection />
    <EndorsementsSection />
  </div>
}