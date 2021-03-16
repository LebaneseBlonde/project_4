import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BioSection from './BioSection'
import EndorsementsSection from './EndorsementsSection'
import HeroSection from './HeroSection'
import UpdatesSection from './UpdatesSection'
import TiersSection from './TiersSection'

export default function BusinessProfile() {

  return <div>
    <HeroSection />
    <TiersSection />
    <BioSection />
    <UpdatesSection />
    <EndorsementsSection />
  </div>
}