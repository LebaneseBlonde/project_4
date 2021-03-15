import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BusinessBioSection from './BusinessBioSection'
import BusinessEndorsementsSection from './BusinessEndorsementsSection'
import BusinessFundSection from './BusinessFundSection'
import BusinessUpdatesSection from './BusinessUpdatesSection'

export default function BusinessProfile() {

  return <div>
    <BusinessBioSection />
    <BusinessFundSection />
    <BusinessUpdatesSection />
    <BusinessEndorsementsSection />
  </div>
}